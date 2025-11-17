"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { MdOutlineRocketLaunch, MdOutlineDeliveryDining } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiFillProduct } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";

import styles from "@/style/sidebar.module.css";

const menuItems = [
  { href: "/", label: "home", icon: <IoHomeOutline /> },
  { href: "/users", label: "users", icon: <FiUsers /> },
  { href: "/suppliers", label: "suppliers", icon: <CiDeliveryTruck /> },
  { href: "/customers", label: "customers", icon: <FiUsers /> },
  { href: "/products", label: "products", icon: <AiFillProduct /> },
  { href: "/delegates", label: "delegates", icon: <MdOutlineDeliveryDining /> },
  { href: "/Analytics", label: "analytics", icon: <SiSimpleanalytics /> },
  { href: "/setting", label: "setting", icon: <IoSettingsOutline /> },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex w-64  flex-col h-dvh fixed overflow-hidden items-center  bg-light-background dark:bg-dark-background border-r border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <h1 className="w-full h-24 text-3xl uppercase text-accent-foreground border-b border-gray-200 dark:border-gray-700 items-center justify-center flex">
        <span className="font-cairo text-orange-600 text-4xl mr-1">
          <MdOutlineRocketLaunch />
        </span>
        <span className="text-gray-800 dark:text-gray-100">ROCKET</span>
      </h1>

      <div className="menu-items w-64 flex-col items-center pt-2">
        <div className="w-full text-sm text-foreground uppercase items-start pl-3 flex">
          <span className="text-sm items-center justify-center pt-1 text-orange-600">
            <LuLayoutDashboard />
          </span>
          <h6 className="ml-2 text-l items-center text-gray-700 dark:text-gray-300">
            menu
          </h6>
        </div>

        <ul className="w-full h-auto itemList flex-col p-2 items-center mt-3 justify-center">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={` ${
                  isActive
                    ? "bg-gradient-to-r from-[#1c7ed6] to-[#86baf5] text-white shadow-md"
                    : "bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text hover:bg-gradient-to-r hover:from-[#1c7ed6] hover:to-[#86baf5] hover:text-white"
                } transition-all duration-300 w-full h-10 flex items-center justify-center text-xs mb-2.5 rounded-lg border-[.3px] capitalize `}
              >
                <li className="w-full h-full flex justify-center items-center gap-1 capitalize">
                  <span className="text-orange-600 text-lg">{item.icon}</span>
                  {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
