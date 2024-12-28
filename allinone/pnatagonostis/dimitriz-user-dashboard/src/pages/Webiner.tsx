import React from "react";
import TransactionsStatus from "../component/Transactions/TransactionStatus";
import TransactionTable from "../component/Transactions/TransactionsTable";
import { Button, Image, Input } from "antd";
import uploadimage from "../assets/Images/dashboard/weabinner.png";
type Props = {};
import { Flex, Radio } from 'antd';

const options = [
  { label: '€5 for 7 Days', value: '5' },
  { label: '€10 for 30 Days', value: '10' },
  { label: '€10 for 30 Days', value: '30' },
];
const Webiner = (props: Props) => {
  return (
    <div className="border border-gray-300 rounded-lg bg-white">
      {/* <TransactionsStatus />
      {/* <TransactionTable /> */}
      <div className="max-w-xl mx-auto p-[40px]  h-full  ">
       <div className="flex justify-center items-center w-full">
       <Image
        className="w-full"

          src={uploadimage}
        />
       </div>
        <h1 className="text-center text-lg font-semibold text-[#101828] mt-5">Upload your webinar today</h1>
        <p className="text-start  text-[16px] text-[#101828] text-gray-500 mt-2 pb-4 ">
        Any assets related to webinar used in projects will live here.Start creating by uploading your files.
        </p>
        <p className="text-[#475467]">Suggested <strong>Height:330 px Weight: 545 px</strong> </p>
       <div>
        <p className="text-[#1D2939] text-sm font-bold mt-5 mb-2">webinar link</p>
       <Input placeholder="paste your link  here " className="text-[16px]  border-[#D0D5DD] h-[44px]" />
       </div>
   

  <div className="py-2">
    <p className="text-[16px] text-[#101828] font-semibold pb-2">Select a plan</p>
    <Flex vertical gap="middle">
    <Radio.Group
     className="text-lg text-[#101828] text-[#344054]  pb-4 "
      options={options}
      defaultValue="Apple"
      optionType="button"
      buttonStyle="solid"
    />
  </Flex>
  </div>
 <div className="flex gap-4  justify-center items-center w-full">
 <Input className="p-2"/>
 <Button type="primary" className="w-full p-[20px] ">submit</Button>
 </div>
    
      </div>
    </div>
  );
};

export default Webiner;
