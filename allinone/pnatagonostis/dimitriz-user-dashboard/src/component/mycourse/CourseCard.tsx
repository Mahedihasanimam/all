import React, { useState } from "react";

import { ClockCircleOutlined, UsergroupDeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Rate, Dropdown, Menu, Image } from "antd";

// Define the props type
interface CourseCardProps {
  courseimage: string;
  courseTitle: string;
  instructor: string;
  rating: number;
  price: number;
  reviews: number;
  duration: string;
  students: number;
  
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseimage,
  courseTitle,
  instructor,
  rating,
  price,
  reviews,
  duration,
  students,

}) => {
  const [showActions, setShowActions] = useState(false);

  // Menu for Edit, View Details, Delete actions
  const menu = (
    <Menu>
      <Menu.Item key="edit" onClick={() => alert('Edit clicked')}>
        Edit
      </Menu.Item>
      <Menu.Item key="view" onClick={() => alert('View Details clicked')}>
        View Details
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => alert('Delete clicked')}>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Course Image */}
      <Image
        className="w-full  object-cover"
        src={courseimage}
        alt="Course"
        height={260}
        width={500}
      />
      {/* Course Details */}
      <div className="p-4">
       
        <h5 className="text-lg font-bold tracking-tight text-[#1D2939] mb-2">{courseTitle}</h5>
        <div className="flex items-center justify-between text-[#475467] text-sm py-4 border-b border-[#E5E7EB]">
          
          <span className="flex items-center font-normal">
            <UsergroupDeleteOutlined className="text-lg pr-2" />
            {students} Students
          </span>
        
          <div className="flex items-center justify-center mb-2">
            <Rate  count={1} disabled allowHalf value={rating} />
            <span className="text-[#475467] font-bold text-[16px] ml-2">{rating}</span>
            <span className="text-[#475467] font-normal text-sm ml-2">({reviews})</span>
          </div>
     
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-lg font-semibold text-[#000000]">€ {price}</span>

          {/* Edit Icon with Dropdown Menu */}
          <Dropdown overlay={menu} trigger={['click']}>
          <EditOutlined className="text-xl cursor-pointer" />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
