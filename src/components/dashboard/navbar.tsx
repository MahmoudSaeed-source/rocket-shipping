import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ModeToggle } from "../ui/mode-toggle";
import UserProfile from "./user-profile";

const NavBar = () => {
  return (
    <div className="flex items-center justify-start w-full h-24 px-4 font-poppins bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text transition-all duration-300">
      {/* 🔍 Search Section - hidden on small screens */}
      <div className="hidden md:flex items-center w-[40%]">
        <div
          className="p-[2px] rounded-md transition-all duration-300 w-full"
          style={{
            background: "linear-gradient(45deg, #1c7ed6, #86baf5)",
          }}
        >
          <div className="bg-gray-100 rounded-md p-[2px] flex">
            <div className="relative flex items-center h-12 w-full">
              <IoSearchSharp className="absolute left-3 text-blue-500 text-xl" />
              <input
                type="text"
                className="h-12 w-full bg-white rounded-md border-none outline-none pl-10 text-gray-700 placeholder:text-gray-400 placeholder:italic placeholder:opacity-70 placeholder:font-poppins placeholder:text-sm focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                placeholder="Search or write a comment"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ⚙️ Mode + Notifications */}
      <div className=" lg:w[10%] w-[20%] flex items-center justify-center lg:justify-end gap-2 md:gap-4  lg:ml-20">
        <div className="flex items-center justify-center">
          <ModeToggle />
        </div>

        <div className="relative flex items-center justify-center">
          <span className="absolute -top-2 -right-2 text-sm text-blue-400 dark:text-gray-200">
            0
          </span>
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white dark:from-yellow-400 dark:to-orange-400 hover:opacity-90 transition-all">
            <IoIosNotificationsOutline />
          </div>
        </div>
      </div>

      {/* 👤 User Profile */}
      <div className="flex items-center justify-center w-[80%] md:w-[30%] ">
        <UserProfile />
      </div>
    </div>
  );
};

export default NavBar;
