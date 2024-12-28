'use client'
import React, { useState } from "react";

import { HiMiniUsers } from "react-icons/hi2";
import { FaArrowTrendUp, FaUser } from "react-icons/fa6";
import { SiCoursera, SiPaypal } from "react-icons/si";
import { FcComboChart, FcDocument } from "react-icons/fc";
import { PlayCircleOutlined } from "@ant-design/icons";
import { DiStackoverflow } from "react-icons/di";
import { GrDocumentVerified } from "react-icons/gr";
import { CiCreditCard1, CiTrophy } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { IoIosTrophy } from "react-icons/io";
import SelectBox from "../share/dashboard/SelectBox";

const cardData = [
  {
    id: 1,
    icon: <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="8" fill="white"/>
    <path opacity="0.2" d="M19.5 19.5V38.5L21.5 40.5H40.5V19.5H19.5Z" fill="#7F56D9"/>
    <path d="M19.5 31.9091V20.5C19.5 20.2348 19.6054 19.9804 19.7929 19.7929C19.9804 19.6054 20.2348 19.5 20.5 19.5H39.5C39.7652 19.5 40.0196 19.6054 40.2071 19.7929C40.3946 19.9804 40.5 20.2348 40.5 20.5V39.5C40.5 39.7652 40.3946 40.0196 40.2071 40.2071C40.0196 40.3946 39.7652 40.5 39.5 40.5H30.9545" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 33L22 41L18 37" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
,
    title: "684",
    description: "Enrolled Courses",
  },
//   {
//     id: 2,
//     icon: <GrDocumentVerified style={{ fontSize: "30px", color: "#7F56D9" }} />,
//     title: "03",
//     description: "Active course",
//   },
  {
    id: 3,
    icon: <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="8" fill="white"/>
    <path opacity="0.2" d="M19.5 19.5V38.5L21.5 40.5H40.5V19.5H19.5Z" fill="#7F56D9"/>
    <path d="M19.5 31.9091V20.5C19.5 20.2348 19.6054 19.9804 19.7929 19.7929C19.9804 19.6054 20.2348 19.5 20.5 19.5H39.5C39.7652 19.5 40.0196 19.6054 40.2071 19.7929C40.3946 19.9804 40.5 20.2348 40.5 20.5V39.5C40.5 39.7652 40.3946 40.0196 40.2071 40.2071C40.0196 40.3946 39.7652 40.5 39.5 40.5H30.9545" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 33L22 41L18 37" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    ,
    title: "486",
    description: "Completed Courses",
  },
  {
    id: 4,
    icon: <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="8" fill="white"/>
    <path opacity="0.2" d="M19.5 19.5V38.5L21.5 40.5H40.5V19.5H19.5Z" fill="#7F56D9"/>
    <path d="M19.5 31.9091V20.5C19.5 20.2348 19.6054 19.9804 19.7929 19.7929C19.9804 19.6054 20.2348 19.5 20.5 19.5H39.5C39.7652 19.5 40.0196 19.6054 40.2071 19.7929C40.3946 19.9804 40.5 20.2348 40.5 20.5V39.5C40.5 39.7652 40.3946 40.0196 40.2071 40.2071C40.0196 40.3946 39.7652 40.5 39.5 40.5H30.9545" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 33L22 41L18 37" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    ,
    title: "47,684",
    description: "Students",
  },
//   {
//     id: 5,
//     icon: <BsStack style={{ fontSize: "30px", color: "#F79009" }} />,
//     title: "24,996",
//     description: "Total Course Sold",
//   },
  {
    id: 6,
    icon: <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="8" fill="white"/>
    <path opacity="0.2" d="M16.999 26.1055H42.999L42.9998 37.9989C42.9998 38.2642 42.8944 38.5185 42.7069 38.706C42.5193 38.8936 42.265 38.9989 41.9998 38.9989H17.9998C17.7345 38.9989 17.4802 38.8936 17.2926 38.706C17.1051 38.5185 16.9998 38.2642 16.9998 37.9989L16.999 26.1055Z" fill="#475467"/>
    <path d="M42 21H18C17.4477 21 17 21.4477 17 22V38C17 38.5523 17.4477 39 18 39H42C42.5523 39 43 38.5523 43 38V22C43 21.4477 42.5523 21 42 21Z" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M34.999 35H38.999" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28.999 35H30.999" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.999 26.1055H42.999" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    ,
    title: "€7,461,767.00",
    description: "USD Total Earning",
  },
];

const Status = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    console.log("Selected", value);
  };

  const selectOptions = [
    { value: "1", label: "week" },
    { value: "2", label: "Month" },
    { value: "3", label: "Year" },
  ];

  return (
    <div className="bg-[#FFFFFF] p-6 rounded-xl rounded-b-none ">
      <div className="flex justify-between w-full">
        <div className="pr-8">
          <SelectBox
            options={selectOptions}
            placeholder="Week"
            onChange={handleSelectChange}
            style={{ width: 100 }}
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-[12px]">
        {cardData.map((card, index) => {
          const bgColors = [
            "bg-[#F9F5FF]",
            "bg-[#ECFDF3]",
            "bg-[#FEF3F2]",
            "bg-[#F9FAFB]",
            // "bg-[#FFFAEB]",
            // "bg-[#F9FAFB]",
          ];
          const selectedBgColor =
            selectedCard === index
              ? "bg-[#D8F0FF]"
              : bgColors[index % bgColors.length];

          return (
            <div
              key={card.id}
              className={`flex justify-between items-center rounded-2xl cursor-pointer ${selectedBgColor}  h-[184px] `}
              onClick={() => handleCardClick(index)}
            >
              <div className=" gap-4 p-6 w-fit">
                <div
                 
                >
                  {card.icon}
                </div>
                <div className="pt-2">
                  <h1 className="text-[24px] font-semibold">{card.title}</h1>
                  <p className="text-sm text-[#4E5566] font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Status;
