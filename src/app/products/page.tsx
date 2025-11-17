import Link from "next/link";
import TableProducts from "@/components/products/Table";
export default async function Products() {
  return (
    <div className="w-full p-8 text-light-text bg-kight-background  dark:text-dark-text dark:bg-dark-background  rounded-xl">
      <div className="w-full h-12 p-4 flex justify-between items-center ">
        <h3 className="font-poppins text-2xl capitalize">products</h3>
        
      </div>
      <div className="products-content mt-4 p-6 rounded-lg border-1 shadow-md dark:bg-gray-800 ">
        <div className=" w-full  h-16 flex justify-between items-center ">
          <div>
            <p>productList</p>
            <p className="text-gray-400 text-sm">
              Track your store's progress to boost your sales.
            </p>
          </div>
          <div className="w-32  h-12  bg-btn-background text-btn-text  ">

            <button
              className="p-2 text-center text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all w-32 h-12"
            >
              <Link
                className="bg-btn-background text-btn-text"
                href="/products/newproduct"
              >NEW PRODUCT</Link>
            </button>
          </div>
        </div>
        <TableProducts />
      </div>
    </div>
  );
}
