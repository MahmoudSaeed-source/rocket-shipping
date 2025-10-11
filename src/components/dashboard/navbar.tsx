import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ModeToggle } from "../ui/mode-toggle";
import UserProfile from "./user-profile";
const NavBar = () => {
  return (
    <div className="navContainer w-full  flex justify-start item-center font-poppins px-4">
      <div className="searchSection h-24 w-[40%] flex items-center justify-start ">
        <div
          className="p-[2px] rounded-md transition-all duration-300 w-[80%]"
          style={{
            background: "linear-gradient(45deg, #1c7ed6, #86baf5)",
          }}
        >
          <div className="bg-gray-100 rounded-md p-[2px] flex">
            <div className="relative flex items-center h-12 w-full">
              <IoSearchSharp className="absolute left-3 text-blue-500 text-xl" />
              <input
                type="text"
                className="h-12 w-full  bg-white rounded-md text-center border-none outline-none pl-10 text-gray-700 placeholder:text-gray-400 placeholder:italic placeholder:opacity-70  placeholder:font-poppins
            placeholder:text-sm
            focus:ring-2focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all duration-300"
                placeholder="Search or write a comment"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="not-mode  w-[20%] h-24  flex items-center justify-end ml-44 ">
        <div className="mode w-20 h-20   bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text  flex items-center justify-center">
          <span className="w-16 h-16 rounded-full flex justify-center items-center   ">
            <ModeToggle />
          </span>
        </div>
        <div className="not w-10 h-10   bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text  flex items-center justify-center relative ">
          <span className="absolute -top-2 -right-1  text-blue-400 dark:text-gray-200">
            0
          </span>
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white dark:from-yellow-400 dark:to-orange-400 hover:opacity-90 transition-all">
            <IoIosNotificationsOutline />
          </div>
        </div>
      </div>
      <div className="userprofile w-[40%] h-24 ml-4">
        <UserProfile/>
      </div>
    </div>
  );
};

export default NavBar;
