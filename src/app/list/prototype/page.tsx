import Footer from '@/components/footer';
import HeaderGoogleSheets from '@/components/header-google-sheets';
import HeaderLogo from '@/components/header-logo';
import HeaderSocialMedia from '@/components/header-social-media';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { unstable_noStore as noStore } from 'next/cache';
import React from 'react';
import { setTimeout } from 'timers/promises';

const googleForms_order = process.env.GOOGLE_FORMS_ORDER ?? '';
const googleSheetsID_inventory = process.env.GOOGLE_SHEETS_ID_INVENTORY ?? '';

// Set up API access to Google Sheets.
// Source:
//   https://theoephraim.github.io/node-google-spreadsheet/
const googleSheetsAPIAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

interface Inventory {
  index: number;
  produce: string;
  note: string;
  price: string;
}

async function getInventory(): Promise<Inventory[]> {
  const spreadsheet = new GoogleSpreadsheet(
    googleSheetsID_inventory,
    googleSheetsAPIAuth
  );

  // Google Spreadsheet API can sometimes return 502.
  // The best available solution yet is to retry.
  // Source:
  //   https://stackoverflow.com/a/79045600
  const SHEETS_API_RETRY_MAX = 3;
  for (let i = 0; i < SHEETS_API_RETRY_MAX; i++) {
    try {
      await spreadsheet.loadInfo();

      // Break out of the retry loop if the loading works without error.
      break;
    } catch (err: any) {
      console.log(err);
      if (err.response?.status === 502) {
        console.log(
          `[ERROR] 502 error from getInventory(). Retry attempt ${i}`
        );
        if (i !== SHEETS_API_RETRY_MAX - 1) {
          await setTimeout(100 * i);
        } else {
          console.log('[ERROR] RETRY_MAX reached. Aborting.');
          throw err;
        }
      } else {
        console.log('[ERROR] Unknown error from getInventory().');
        throw err;
      }
    }
  }

  const sheet = spreadsheet.sheetsByIndex[0];
  const rows = await sheet.getRows();
  let inventory: Inventory[] = [];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].get('Produce')) {
      inventory[i] = {
        index: i,
        produce: rows[i].get('Produce'),
        note: rows[i].get('Note'),
        price: rows[i].get('Price'),
      };
    }
  }

  return inventory;
}

export default async function Page() {
  // "`noStore` can be used to declaratively opt out of static rendering
  // and indicate a particular Server Component should not be cached."
  // Source:
  //   https://nextjs.org/docs/app/api-reference/functions/unstable_noStore
  noStore();

  let isError = false;
  let inventory: Inventory[] = [];
  try {
    inventory = await getInventory();
  } catch {
    isError = true;
  }

  return (
    <>
      <main className='relative h-max min-h-screen w-full overflow-y-hidden bg-background text-primary'>
        <HeaderLogo />
        <HeaderGoogleSheets />
        <HeaderSocialMedia />

        <div className='relative h-max min-h-screen overflow-y-auto bg-background'>
          {!isError ? (
            <Table className='mx-auto mb-14 mt-20 max-w-[95%]'>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>Produce</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory.map((row) => {
                  return (
                    <TableRow key={row.index}>
                      <TableCell className='font-medium'>
                        <a
                          className='w-max whitespace-nowrap rounded-md bg-primary/75 px-2 py-1 text-sm text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] transition-colors hover:bg-primary-3/90 focus:bg-primary-3/60 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50 sm:text-lg'
                          target='_blank'
                          href={googleForms_order + row.produce}
                          rel='noopener noreferrer'
                        >
                          {row.produce}
                        </a>
                      </TableCell>
                      <TableCell>{row.note}</TableCell>
                      <TableCell>{row.price}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <>
              <Table className='mx-auto mb-14 mt-20 max-w-[95%]'>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[100px]'>Produce</TableHead>
                    <TableHead>Note</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody></TableBody>
              </Table>
              <div className='absolute left-[50%] top-[50%] mx-auto w-[95%] translate-x-[-50%] translate-y-[-50%] overflow-auto text-pretty text-center lg:w-[50%]'>
                <div className='relative mx-4 my-16 whitespace-break-spaces rounded-md bg-slate-300/95 p-4'>
                  <p className='font-black'>ERROR</p>
                  <p className='font-light'>
                    Please refresh this page and try again. We have a limit of
                    300 reads per minute because we're using Google's free
                    Spreadsheet APIs. We built this web app entirely using free
                    services without any dedicated database of our own to
                    minimize maintenance cost and therefore provide this web app
                    for free for all local producers. If you would like to see
                    how we built this, our source code is available at{' '}
                    <a
                      className='hover:text-primary-3/70 active:text-black/70'
                      href='https://github.com/soobinrho/GoodLifeFarms'
                    >
                      https://github.com/soobinrho/GoodLifeFarms
                    </a>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}
