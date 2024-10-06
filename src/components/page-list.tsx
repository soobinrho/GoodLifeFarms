import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';
import Link from 'next/link';
import React from 'react';

export default async function ListPage() {
  return (
    <>
      {/* TODO: If there's a lot of local producers, using a database will make sense, but for now, just hardcoding here will be the most sensible choice, easiest to maintain. */}
      <div className='relative h-max min-h-screen overflow-y-auto bg-background'>
        <Table className='mx-auto mb-14 mt-20 max-w-[95%]'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Name</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow key='0'>
              <TableCell className='font-medium'>
                <Link
                  className='w-max whitespace-nowrap rounded-md bg-primary/75 px-2 py-1 text-sm text-primary-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] transition-colors hover:bg-primary-3/90 focus:bg-primary-3/60 focus-visible:ring-1 active:ring-2 disabled:pointer-events-none disabled:opacity-50 sm:text-lg'
                  href='/list/prototype'
                >
                  Prototype
                </Link>
              </TableCell>
              <TableCell>
                2001 S Summit Ave. Sioux Falls. SD 57197. This is an example
                local producer. Click the "Create" button above to request for
                your own page. After you submit the form, volunteers will get in
                touch with you.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
