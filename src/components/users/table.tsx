import Image from "next/image";
import { usersData } from "@/data/users";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const Users = () => {
  return (
    <div className=" w-full max-h-screen mt-3.5 overflow-auto  ">
      <Table className="font-poppins">
        <TableCaption>A list of your Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>avatar</TableHead>
            <TableHead>name</TableHead>
            <TableHead>email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>LastLogin</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[12px] font-sans">
          {usersData
            ? usersData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={50}
                      height={50}
                    />
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
