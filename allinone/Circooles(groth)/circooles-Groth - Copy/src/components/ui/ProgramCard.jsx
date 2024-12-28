import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ClockCircleOutlined,
  UsergroupDeleteOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Rate } from "antd";
import { useTranslations } from "next-intl";

const ProgramCard = ({ courseimage,courseTitle ,instructor,rating,price ,reviews,duration,students,enrollLink}) => {
const t=useTranslations()
  return (
    <Link href={`/programsDetails/${enrollLink}`}>
    
    <div className=" w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden border">
      {/* COURSE CARD BANNER IMGE HERE */}
     <div className="relative">
     <Image
        className="w-full h-64 object-cover"
        src={courseimage}
        alt="Course"
        height={500}
        width={500}
      />

      <div className="p-2 bg-[#00000099] absolute w-fit top-2  right-2 rounded-lg px-4 text-white ">
      <span className="text-[16px] font-normal">Program</span>
      </div>
     </div>
      {/* COURSE CARD DETAILS HERE */}
      <div className="p-4">
        
        <h5 className="text-lg font-bold tracking-tight text-[#1D2939] mb-2 py-2">
          {courseTitle}
        </h5>
        <div className="flex items-center justify-between text-[#475467] text-sm pb-4 ">
          <span className="mr-4 flex items-center font-medium text-lg">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.3335 12.0996L8.00016 15.4329L14.6668 12.0996M1.3335 8.76628L8.00016 12.0996L14.6668 8.76628M8.00016 2.09961L1.3335 5.43294L8.00016 8.76628L14.6668 5.43294L8.00016 2.09961Z" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span className="text-[#475467] pl-2">6 Courses</span>
          </span>
      
        </div>
    
      </div>
    </div>
    </Link>
  );
};

export default ProgramCard;
