import React from 'react'
import RecentOrders from "./RecentOrders"
import CustomersMap from './CustomersMap';
const CustomersDemographicDelivery = () => {
  return (
    <div className="w-full h-[600px] flex justify-between items-start  mt-8 rounded-3xl p-2 sm:flex-col ">
      <div className="CustomersDemographicDelivery w-[40%] sm:w-full">
        <CustomersMap/>
      </div>
      <div className="RecentOrders w-[60%] sm:w-full ">
        <RecentOrders/>
      </div>
    </div>
  );
}

export default CustomersDemographicDelivery;
