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

const TopratedTutorCard = ({ courseimage,courseTitle ,instructor,rating,price ,reviews,duration,students,enrollLink}) => {
const t=useTranslations()
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
      <span className="text-[16px] font-normal">Course</span>
      </div>
     </div>
      {/* COURSE CARD DETAILS HERE */}
      <div className="p-4">
        <div className="flex justify-between items-center pt-5">
          <p className="text-sm text-[#475467] mb-2">
            
            <Link
              href={`/browseCourse/instructor/${enrollLink}`}
              className=" text-[#1D2939] border-b-2 text-sm font-semibold border-[#1D2939]"
            >
              {instructor}
            </Link>
          </p>
          <div className="flex items-center justify-center mb-2">
            <span className="text-yellow-500 text-sm">
              <Rate disabled allowHalf count={1} defaultValue={rating} />{" "}
              <span className="text-[#475467] font-bold text-[16px]">{rating}</span>
            </span>
            <span className="text-[#475467] font-normal text-sm ml-2">
              ({reviews})
            </span>
          </div>
        </div>
        <h5 className="text-lg font-bold tracking-tight text-[#1D2939] mb-2">
          {courseTitle}
        </h5>
        <div className="flex items-center justify-between text-[#475467] text-sm py-4 border-b border-[#E5E7EB]">
          <span className="mr-4 flex items-center font-medium">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666504 12.7682C0.666504 12.3262 0.842099 11.9023 1.15466 11.5897C1.46722 11.2772 1.89114 11.1016 2.33317 11.1016H11.3332M0.666504 12.7682C0.666504 13.2103 0.842099 13.6342 1.15466 13.9467C1.46722 14.2593 1.89114 14.4349 2.33317 14.4349H11.3332V1.10156H2.33317C1.89114 1.10156 1.46722 1.27716 1.15466 1.58972C0.842099 1.90228 0.666504 2.3262 0.666504 2.76823V12.7682Z" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

           <span className="pl-2"> {duration} </span>
          </span>
          <span className="flex items-center font-normal ">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0003 7.69206C14.0003 11.374 11.0156 14.3587 7.33366 14.3587M14.0003 7.69206C14.0003 4.01016 11.0156 1.02539 7.33366 1.02539M14.0003 7.69206H0.666992M7.33366 14.3587C3.65176 14.3587 0.666992 11.374 0.666992 7.69206M7.33366 14.3587C9.00118 12.5332 9.94883 10.164 10.0003 7.69206C9.94883 5.22008 9.00118 2.85096 7.33366 1.02539M7.33366 14.3587C5.66614 12.5332 4.71849 10.164 4.66699 7.69206C4.71849 5.22008 5.66614 2.85096 7.33366 1.02539M0.666992 7.69206C0.666992 4.01016 3.65176 1.02539 7.33366 1.02539" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span className="text-[14px] font-medium pl-1"> English</span>
          </span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-lg font-semibold text-[#000000]">€ 29.00 <span className="text-[#667085]">/Session</span></span>
          <Link href={`/browseCourse/${enrollLink}`}
            className="inline-flex items-center text-[#14698A] border-b-2 border-[#14698A] text-[16px] font-semibold "
          >
            Book Now
            <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopratedTutorCard;
