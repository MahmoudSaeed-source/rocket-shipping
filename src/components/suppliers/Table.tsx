import {suppliersData} from "@/data/suppliersData"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const SuppliersTable = () => {
  return (
    <div className=" w-full max-h-screen mt-3.5 overflow-auto  ">
      <Table className="font-poppins">
        <TableCaption>A list of your suppliers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>name</TableHead>
            <TableHead>email</TableHead>
            <TableHead>phon</TableHead>
            <TableHead>address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[12px] font-sans">
          {suppliersData
            ? suppliersData.map((sup) => (
                <TableRow>
                  <TableCell className="font-medium">{sup.id}</TableCell>
                  <TableCell>{sup.name}</TableCell>
                  <TableCell>{sup.email}</TableCell>
                  <TableCell>{sup.phon}</TableCell>
                  <TableCell>{sup.address}</TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </div>
  );
}

export default SuppliersTable
