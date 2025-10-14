import { LuUsers } from "react-icons/lu";
import { FaLongArrowAltUp } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaLongArrowAltDown } from "react-icons/fa";
import MonthlyAverageChart from "./MonthlyAverageChartMainContent";
import { ChartPieDonutText } from "./MonthlyTargetChartMainContent";
const HeaderMainContent = () => {
  return (
    <div className="w-full h-auto grid  grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 ">
      <div className=" grid grid-row-2 gap-4 p-4">
        <div className="grid grid-cols-2 h-40 gap-4  ">
          <div className="flex-col rounded-lg p-6  shadow-md h-40 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
            <h5 className="w-8 h-8 bg-light-background text-light-tex dark:bg-dark-background dark:text-dark-text rounded-2xl flex justify-center items-center  text-lg mb-9">
              <LuUsers />
            </h5>
            <h6 className=" font-poppins text-sm text-gray-300 capitalize">
              Customers
            </h6>
            <div className="flex justify-between mt-2">
              <h6 className=" text-2xl font-poppins">3,782</h6>
              <div className=" w-16 h-5 flex justify-center items-center px-4 bg-green-500 rounded-full  text-sm">
                <span>
                  <FaLongArrowAltUp className="text-sm " />
                </span>
                <span>11.01%</span>
              </div>
            </div>
          </div>
          <div className="flex-col rounded-lg p-6 shadow-md h-40 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
            <h5 className="w-8 h-8 dark:bg-light-background dark:text-light-text bg-dark-background text-dark-text rounded-2xl flex justify-center items-center  text-lg mb-9">
              <AiOutlineProduct />
            </h5>
            <h6 className=" font-poppins text-sm text-gray-300 capitalize">
              Orders
            </h6>
            <div className="flex justify-between mt-2 ">
              <h6 className=" text-2xl font-poppins ">5,359</h6>
              <div className=" w-16 h-5 flex justify-center items-center px-4 bg-red-400 rounded-full  text-sm">
                <span>
                  <FaLongArrowAltDown className="text-sm " />
                </span>
                <span>9.05%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
          <MonthlyAverageChart />
        </div>
      </div>
      <div className="h-full">
        <ChartPieDonutText /> 
      </div>
    </div>
  );
};

export default HeaderMainContent;
