import { Checkbox, Input } from "antd";
const { TextArea } = Input;
import React from "react";

type Props = {};

const Support = (props: Props) => {
  return (
    <div className="max-w-2xl space-y-4">
      <div className="flex gap-6 ">
        <div className="w-full" >
          <label className="block font-medium mb-1 text-[#344054]">
            First Name
          </label>
          <Input
          className="w-full"
            style={{
              
              height: "44px",
              borderColor: "#D0D5DD",
              color: "#667085",
              fontSize: "16px",
              fontWeight: 400,
            }}
            placeholder="First Name"
          />
        </div>

        <div className="w-full">
          <label className="block font-medium mb-1 text-[#344054]">
            Last Name
          </label>
          <Input
          className="w-full"
            style={{
         
              height: "44px",
              borderColor: "#D0D5DD",
              color: "#667085",
              fontSize: "16px",
              fontWeight: 400,
            }}
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="w-full" >
          <label className="block font-medium mb-1 text-[#344054]">
           Email
          </label>
          <Input
          className="w-full"
            style={{
              
              height: "44px",
              borderColor: "#D0D5DD",
              color: "#667085",
              fontSize: "16px",
              fontWeight: 400,
            }}
            placeholder="you@company.com"
          />
        </div>
      <div className="w-full" >
          <label className="block font-medium mb-1 text-[#344054]">
          Phone number
          </label>
          <Input
          className="w-full"
            style={{
              
              height: "44px",
              borderColor: "#D0D5DD",
              color: "#667085",
              fontSize: "16px",
              fontWeight: 400,
            }}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      <div className="w-full" >
          <label className="block font-medium mb-1 text-[#344054]">
          Message
          </label>
          <TextArea
          className="w-full"
            style={{
              
              height: "128px",
              borderColor: "#D0D5DD",
              color: "#667085",
              fontSize: "16px",
              fontWeight: 400,
            }}
            
          />
        </div>
        <div>
            <Checkbox id="agree" className="text-[16px] font-normal text-[#475467]">
                <label htmlFor="agree">You agree to our friendly privacy policy.</label>
            </Checkbox>
        </div>
        <Input
          type="submit"
          value="Send message"
          style={{
            backgroundColor: "#0E68E7",
            color: "#FFFFFF",
            height: "44px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "16px",
            width: "100%",
            marginTop: "24px",
          }}
        />
    </div>
  );
};

export default Support;
