"use client"
import Image from 'next/image'
import profileimage from "../../../public/IMG-20220823-WA0023.jpg"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useState } from 'react';
import { Button } from '../ui/button';

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="user-profile-container flex justify-center items-center ">
      <div className="profile-image w-[18%] h-24 flex justify-center items-center rounded-full object-cover">
        <Image
          src={profileimage}
          alt="userImage"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      </div>
      <div className="user-Name w-[60%] h-24 flex justify-center items-center relative">
        <h3 className="capitalize font-poppins text-sm ">Mahmoud saeed</h3>
        <Button
          onClick={() => setOpen(!open)}
          className="w-8 h-8 p-2 ml-2 text-sm flex justify-center items-center  bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text hover:bg-gradient-to-r hover:from-[#1c7ed6]"
        >
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </Button>
      </div>

      {open && (
        <div
          className="absolute top-24 right-16 w-52 rounded-md shadow-lg overflow-hidden 
                  bg-dark-background text-light-text 
                  dark:bg-light-background dark:text-dark-text 
                  border border-gray-200 dark:border-gray-700 z-50"
        >
          <div className="w-full h-12 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text text-[12px]  p-2 mb-4  ">
            <h3 className="UserName text-[12] font-bold capitalize font-poppins ">
              {" "}
              mahmoud Saeed
            </h3>
            <h4 className="UserMail"> mahmoudsaid.wd@gmail.com</h4>
          </div>
          <ul className="flex flex-col text-sm font-poppins">
            <li className="h-8 px-4 py-2 hover:bg-gradient-to-r hover:from-[#1c7ed6] hover:to-[#86baf5] hover:text-white cursor-pointer border-b-2 border-gray-200 mb-4 flex  justify-center items-center ">
              <CgProfile className="mr-4 text-orange-600" /> Profile
            </li>
            <li className="h-8 px-4 py-2 hover:bg-gradient-to-r hover:from-[#1c7ed6] hover:to-[#86baf5] hover:text-white cursor-pointer border-b-2 border-gray-200 mb-4 flex  justify-center items-center">
              <CiEdit className="mr-4 text-orange-600" />Edit profile
            </li>
            <li className=" h-8 px-4 py-2 hover:bg-gradient-to-r hover:from-[#1c7ed6] hover:to-[#86baf5] hover:text-white cursor-pointer border-b-2 border-gray-200 flex  justify-center items-center">
              <CiLogout className="mr-4 text-orange-600" />Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
