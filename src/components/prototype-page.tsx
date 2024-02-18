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
  produce: string;
  note: string;
  price: string;
}

async function getInventory(): Promise<Inventory[]> {
  const spreadsheet = new GoogleSpreadsheet(
    googleSheetsID_inventory,
    googleSheetsAPIAuth
  );
  await spreadsheet.loadInfo();
  const sheet = spreadsheet.sheetsByIndex[0];
  const rows = await sheet.getRows();

  let inventory: Inventory[] = [];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].get('Produce')) {
      inventory[i] = {
        produce: rows[i].get('Produce'),
        note: rows[i].get('Note'),
        price: rows[i].get('Price'),
      };
    }
  }
  return inventory;
}

export default async function PrototypePage() {
  let inventory: Inventory[] = [];
  try {
    inventory = await getInventory();
  } catch (caughtError) {
    console.log(caughtError);
  }

  return (
    <>
      {/* TODO: Use Google Forms API to dynamically assign a form.*/}
      <div className='relative h-max min-h-screen overflow-y-auto bg-background'>
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
                <TableRow>
                  <TableCell className='font-medium'>
                    <a
                      className='w-max whitespace-nowrap rounded-md bg-primary/75 px-4 py-2 text-lg text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] transition-colors hover:bg-primary-3/90 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50'
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
      </div>
    </>
  );
}
