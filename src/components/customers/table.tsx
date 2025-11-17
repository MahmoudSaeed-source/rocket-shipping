import Image from "next/image";
import { customersData } from "@/data/customers";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const CustomersTable = () => {
  return (
    <div className=" w-full max-h-screen mt-3.5 overflow-auto  ">
      <Table className="font-poppins">
        <TableCaption >A list of your Customers.</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>FullName</TableHead>
            <TableHead>email</TableHead>
            <TableHead>phone</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>City</TableHead>
            <TableHead>TotalShipments</TableHead>
            <TableHead>JoinedAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[12px] font-sans">
          {customersData
            ? customersData.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.fullName}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.country}</TableCell>
                  <TableCell>{customer.city}</TableCell>
                  <TableCell>{customer.totalShipments}</TableCell>
                  <TableCell>{customer.joinedAt}</TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersTable;
