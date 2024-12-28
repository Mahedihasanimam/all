import { Button, Input } from "antd";
import React from "react";

const PublishCourse: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold border-b-2 border-[#E9EAF0] pb-4 mb-4">
        Publish Course
      </h2>
      <div className="flex item-start justify-between  gap-4 mt-6">
        <div className="w-full">
          <p
            className="text-sm py-2 font-semibold text-[#1D2939]"
   
          >
            Welcome Message
          </p>
          <Input.TextArea
            className=" bg-white w-full"
            style={{
            
              height: "150px",
              borderColor: "#D0D5DD",
              color: "#667085",
              fontSize: "16px",
              fontWeight: 400,
            }}
            placeholder="Enter course starting message here..."
          />
        </div>

        <div className="w-full">
          <p
            className="text-sm py-2 font-semibold text-[#1D2939]"
     
          >
            Congratulations Message
          </p>
          <Input.TextArea
            className=" bg-white w-full"
            style={{
             
              height: "150px",
              borderColor: "#D0D5DD",
              color: "#667085",
              fontSize: "16px",
              fontWeight: 400,
            }}
            placeholder="Enter your course completed message here..."
          />
        </div>
      </div>
      <div className="flex justify-between mt-[48px]">
              <button className="h-[48px] text-[#475467] text-[16px] border-none font-semibold bg-transparent" >Previous</button>
              <Button style={{height: '44px',fontSize: '16px', fontWeight:400}} type="primary">SPublish</Button>
            </div>
    </div>
  );
};

export default PublishCourse;
