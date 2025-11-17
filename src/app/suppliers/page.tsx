import Link from "next/link";
import SuppliersTable from "@/components/suppliers/Table";
export default async function Suppliers() {
  return (
    <div className="w-full p-8 text-light-text bg-light-background  dark:text-dark-text dark:bg-dark-background  rounded-xl">
      <div className="w-full h-12 p-4 flex justify-between items-center ">
        <h3 className="font-poppins text-2xl capitalize">Suppliers</h3>
      </div>
      <div className="products-content mt-4 p-6 rounded-lg border-1 shadow-md dark:bg-gray-800 ">
        <div className=" w-full  h-16 flex justify-between items-center ">
          <div>
            <p>SuppliersList</p>
            <p className="text-gray-400 text-sm">Our Suppliers List.</p>
          </div>
          <div className="w-32  h-12  bg-btn-background text-btn-text  ">
            <button className="p-2 text-center text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all w-32 h-12">
              <Link
                className="bg-btn-background text-btn-text uppercase"
                href="/suppliers/newsupplier"
              >
                NEW Supplier
              </Link>
            </button>
          </div>
        </div>
        <SuppliersTable />
      </div>
    </div>
  );
}
