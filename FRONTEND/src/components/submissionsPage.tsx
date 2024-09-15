import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export function SubmissionsPage() {
  return (
    <section className="flex flex-col w-full pr-4">
      <div className="bg-[#222222] p-4 rounded-md">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">5/5</div>
          <div className="text-green-500">Accepted</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-400">STATUS</div>
            <div className="text-white">Accepted</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">TIME</div>
            <div className="text-white">0.028</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">MEMORY</div>
            <div className="text-white">4012</div>
          </div>
        </div>
      </div>
      <h2 className="mt-8 mb-4 text-lg font-semibold">Previous Submissions</h2>
      <div className="bg-[#222222] p-4 rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-400">STATUS</TableHead>
              <TableHead className="text-gray-400">TEST CASES PASSED</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-green-500">✔</TableCell>
              <TableCell className="text-white">5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-red-500">✖</TableCell>
              <TableCell className="text-white">4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-red-500">✖</TableCell>
              <TableCell className="text-white">3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-red-500">✖</TableCell>
              <TableCell className="text-white">2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-red-500">✖</TableCell>
              <TableCell className="text-white">2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
