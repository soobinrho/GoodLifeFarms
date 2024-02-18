import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';

export default function PrototypePage() {
  return (
    <>
      <div className='relative h-max min-h-screen overflow-y-auto bg-background'>
        <Table className='mx-auto mb-14 mt-20 max-w-[95%]'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Produce</TableHead>
              <TableHead>Note</TableHead>
              <TableHead> Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>Onion</TableCell>
              <TableCell>
                White onion. 30 available. (Last updated: 2024-02-18 23:11)
              </TableCell>
              <TableCell>$0.93 per EA</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
