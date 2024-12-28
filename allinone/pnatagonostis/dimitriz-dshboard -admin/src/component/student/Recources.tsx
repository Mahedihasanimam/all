import { Input } from "antd";
import { Search } from "lucide-react";
import React from "react";
import groupimg from "../../assets/Images/dashboard/Group 3175.png";
import { Card, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { FaRegFile } from "react-icons/fa";
const Recources: React.FC = () => {
  return (
    <div>
      <div className="w-full max-w-3xl">
        <Input
          prefix={<Search size={16} />}
          className="w-full h-[44px]"
          placeholder="Search for your resources"
        />
      </div>


     


      <div className="xl:flex lg:flex flex-wrap jusitfy-between space-x-4 w-full my-8">
      {/* Left Cards */}
      <div className="flex flex-col space-y-4 w-full max-w-4xl">
        {/* First Card */}
        <Card className=" max-w-2xl border-1 border-[#E5E5E5] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={groupimg}
                alt="Instructor"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-[#344054]">John Doe</h4>
                <p className="text-sm text-[#475467]">Head of UX</p>
              </div>
            </div>
            <div className="text-[#475467] text-sm">Just now</div>
          </div>

          <h4 className="mt-4 text-[14px] text-[#344054] font-bold">Course module</h4>
          <p className="text-sm text-[#344054] font-normal py-2">Collect your Module and get an overview</p>

          <div className="mt-2">
            <a href="#" className="text-[#1253BB] flex items-center space-x-2">
              <FaRegFile className="text-[#667085] text-xl"  /> UX Design course
            </a>
          </div>

          <Button
            type="primary"
            className="mt-4 flex items-center space-x-2 h-[36px] text-[14px] text-white font-semibold  bg-[#0E68E7] hover:bg-blue-600"
            icon={<DownloadOutlined className="text-xl" />}
            block
          >
            Download all
          </Button>
        </Card>

        {/* Second Card */}
        <Card className=" max-w-2xl border-1 border-[#E5E5E5] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={groupimg}
                alt="Instructor"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-gray-500">Head of UX</p>
              </div>
            </div>
            <div className="text-gray-500 text-sm">2 days ago</div>
          </div>

          <h4 className="mt-4 text-[14px] text-[#344054] font-bold">Essential materials</h4>
          <p className="text-sm text-[#344054] font-normal py-2">Collect your Module and get a overview</p>

          <div className="mt-2 ">
            <a href="#" className="text-[#1253BB] flex items-center space-x-2 underline ">
              <FaRegFile className="text-[#667085] text-xl"  /> Materials
            </a>
            <a href="#" className="text-[#1253BB] flex items-center space-x-2 mt-2 underline">
              <FaRegFile className="text-[#667085] text-xl"  /> Materials
            </a>
            <a href="#" className="text-[#1253BB] flex items-center space-x-2 mt-2 underline">
              <FaRegFile className="text-[#667085] text-xl"  /> Materials
            </a>
          </div>

         
          <Button
            type="primary"
            className="mt-4 flex items-center space-x-2 h-[36px] text-[14px] text-white font-semibold  bg-[#0E68E7] hover:bg-blue-600"
            icon={<DownloadOutlined className="text-xl" />}
            block
          >
            Download all
          </Button>
        </Card>
      </div>

      {/* Right Image Card */}
      <div className="relative  mt-4   rounded-lg overflow-hidden shadow-md">
        <img
          src={groupimg}
          alt="Webinar"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-4 left-4 text-white">
        <div className="w-fit bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          WEBINAR
        </div>
          <h4 className="text-[20px] font-normal">Ana Kursova</h4>
          <p className="text-[24px] font-semibold text-white">Masterclass in Design Thinking, Innovation & Creativity</p>
        </div>
        <Button
          className="absolute top-2 right-2 bg-transparent border-none text-white"
          shape="circle"
          icon={<DownloadOutlined />}
        />
      </div>
    </div>

    </div>
  );
};

export default Recources;
