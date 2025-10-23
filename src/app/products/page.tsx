"use client"
import Link from "next/link";
import TableProducts from "@/components/products/Table";
import { usePathname } from "next/navigation";

export default async function Products() {
  const currentPath = usePathname();

  return (
    <div className="w-full p-8 text-light-text bg-light-background dark:text-dark-text dark:bg-dark-background ">
      <div className="w-full h-12 p-4 flex justify-between items-center ">
        <h3 className="font-poppins text-2xl capitalize">products</h3>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className={
                currentPath === "/"
                  ? "text-light-text dark:text-dark-text font-bold font-poppins"
                  : "text-gray-500 font-light"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={
                currentPath === "/products"
                  ? "text-light-text dark:text-dark-text font-bold font-poppins"
                  : "text-gray-500 font-light"
              }
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div className="products-content mt-4 p-2 shadow-md rounded-lg border-1 border-gray-300 ">
        <div className=" w-full border-2 border-red-500 h-12 flex justify-between items-center ">
          <div>
            <p>productList</p>
            <p className="text-gray-400 text-sm">
              Track your store's progress to boost your sales.
            </p>
          </div>
          <div className="w-32 border-2 bg-btn-background text-btn-text ">
            <Link
              className="bg-btn-background text-btn-text"
              href="/products/newproduct"
            >
              NEW PRODUCT
            </Link>
          </div>
        </div>
        <TableProducts />
      </div>
    </div>
  );
}
