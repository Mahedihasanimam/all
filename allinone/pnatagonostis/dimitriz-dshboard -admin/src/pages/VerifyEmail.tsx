import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";


const VerifyEmail: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

  const onFinish = (values: { email: string }) => {
    const otpValue = otp.join(""); 
    console.log("Success:", { ...values, otp: otpValue });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value: string, index: number) => {
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    if (value.length === 1 && index < 3) {
      document.getElementById(`otpInput-${index + 1}`)?.focus();
    }
  };

  return (
 
      <div className="max-w-md w-full mx-auto pt-32 px-4">
        <div className="text-start">
          <h1 className="text-3xl font-bold mb-4">OTP verification</h1>
          <h3 className="text-[#475467] text-[16px]">
            We’ve sent you a verification code to <br /> alim...@gmail.com
          </h3>
        </div>
        <div className="lg:max-w-lg w-full mx-auto pt-8 ">
          <div className="flex justify-start items-center ">
            <Form
              name="otp-verification"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ maxWidth: "500px", width: "100%" }}
            >
              {/* OTP Input */}
              <div className="flex justify-between">
                {otp.map((digit, index) => (
                  <Input
                    placeholder="0"
                    className="text-6xl text-[#D0D5DD]"
                    key={index}
                    id={`otpInput-${index}`}
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    style={{
                      width: "80px",
                      height: "80px",
                      textAlign: "center",
                      fontSize: "24px",
                    }}
                  />
                ))}
              </div>

              <Form.Item className="pt-6">
              <Link to="/auth/set-new-password">
              <Button
                  className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                  size="large"
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Submit
                </Button></Link>
              </Form.Item>
            </Form>
          </div>
          <div className="text-start lg:mt-4">
            Didn’t receive the code?{" "}
            <Link to="#">
              <span className="text-[#195671] font-semibold hover:underline">
                Send again
              </span>
            </Link>
          </div>
        </div>
      </div>
  
  );
};

export default VerifyEmail;
