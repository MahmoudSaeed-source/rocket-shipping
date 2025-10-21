import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react'

const Products = () => {
   const headersList = headers();
   const currentPath = headersList.get("x-invoke-path") || "";
  
  return (
    <div className="w-full p-4 text-light-text bg-light-background dark:text-dark-text dark:bg-dark-background  flex-cols border-2 border-red-500">
      <div className="w-full h-8 p-4 flex  ">
        <h3 className="w-[70%] font-poppins ">products</h3>
        <ul className="w-[30%]">
          <li className = "ml-2"><Link href="/">Home</Link></li>
          <li className = "ml-2"><Link href="/">`${path}`</Link></li>
          <li><Link href="/products">products</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Products
