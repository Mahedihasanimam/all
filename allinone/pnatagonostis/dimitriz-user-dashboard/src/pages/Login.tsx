"use client";
import React from "react";
import { Form, Input, Button, Checkbox, Image } from "antd";
import logoimage from "../assets/Images/dashboard/logo.png";
import { Link } from "react-router-dom";

// Define the types for form values
interface SignInValues {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const onFinish = (values: SignInValues) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (

      <div className="pt-12 w-full">
        <div className="text-center px-2 py-8">
          <div className="flex justify-center items-center mb-4">
            <Image src={logoimage} alt="Logo" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Log in to your account</h1>
          <h3 className="text-[#475467] text-[16px]">
            Welcome back! Please enter your details.
          </h3>
        </div>
        <div className="lg:max-w-lg w-full mx-auto px-4">
          <div className="flex justify-center items-center ">
            <Form
              name="signin"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <Form.Item
                label={
                  <label
                    htmlFor="email"
                    className="text-sm text-[#344054] font-medium"
                  >
                    Email
                  </label>
                }
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
              >
                <Input
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label={
                  <label
                    htmlFor="password"
                    className="text-sm text-[#344054] font-medium"
                  >
                    Password
                  </label>
                }
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter your password"
                />
              </Form.Item>

              <div className="flex justify-between items-center">
                <Form.Item
                  name="remember"
                  className="w-fit"
                  valuePropName="checked"
                >
                  <Checkbox className="text-[14px] text-[#344054] font-medium">
                    Remember me
                  </Checkbox>
                </Form.Item>

                {/* Forgot Password Link */}
                <Link
                  to="/auth/forget-password"
                  className="text-[14px] text-[#195671] font-semibold hover:underline pb-4"
                >
                  Forgot password?
                </Link>
              </div>

              <Form.Item>
                <Button
                  className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                  size="large"
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Log In
                </Button>
              </Form.Item>

              {/* Google Sign In Button */}
             
            </Form>
          </div>
          

        </div>
      </div>

  );
};

export default Login;
