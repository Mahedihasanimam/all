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

const MyProgramCard = ({ courseimage, courseTitle, instructor, rating, price, reviews, duration, students, enrollLink }) => {

  return (
    <div className=" w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
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
      <div className="p-4 w-[90%]">

        <h5 className="text-2xl font-bold tracking-tight text-[#1D2939] mb-2 py-2">
          {courseTitle}
        </h5>
        <div className="flex items-center justify-between text-[#475467] text-sm pb-4 ">

          {/* item-1  */}
          <div className="flex items-center justify-center space-x-2">
            <div className="px-2 py-[2px] bg-[#12B76A] rounded-full text-white font-semibold">
              2
            </div>
            <span className="text-[16px] font-semibold text-[#475467] ">Completed</span>
          </div>

          {/* item-2  */}
          <div className="flex items-center justify-center space-x-2">
            <div className="px-2 py-[2px] bg-[#0F82AB] rounded-full text-white   font-semibold">
              1
            </div>
            <span className="text-[16px] font-semibold text-[#475467]">In progress</span>
          </div>
          {/* item-3  */}
          <div className="flex items-center justify-center space-x-2">
            <div className="px-2 py-[2px] bg-[#F04438] rounded-full text-white font-semibold">
              4
            </div>
            <span className="text-[16px] font-semibold text-[#475467]">Pending</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyProgramCard;
