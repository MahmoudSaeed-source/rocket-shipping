"use client"
import {productsData} from "@/data/productsData"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useFetchUrl } from "@/app/hooks/GetData"
const TableProducts = () => {
  const { data, loading, error } = useFetchUrl(productsData);
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error}</p>;
  return (
    <div className=" w-full max-h-screen mt-3.5 overflow-auto ">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead className="w-[100px]">image</TableHead>
            <TableHead>name</TableHead>
            <TableHead>categories</TableHead>
            <TableHead>suppliers</TableHead>
            <TableHead>stock</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[12px] font-sans">
          {data
            ? data.map((pro) => (
                <TableRow key={pro.id}>
                  <TableCell className="font-medium">{pro.id}</TableCell>
                  <TableCell>
                    <Image
                      width={200}
                      height={200}
                      src={pro.image}
                      alt={pro.name}
                    />
                  </TableCell>
                  <TableCell>{pro.name}</TableCell>
                  <TableCell>{pro.category}</TableCell>
                  <TableCell>{pro.supplierId}</TableCell>
                  <TableCell>{pro.stock}</TableCell>
                  <TableCell className="text-right">{pro.price}</TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>{" "}
    </div>
  );
}

export default TableProducts;
