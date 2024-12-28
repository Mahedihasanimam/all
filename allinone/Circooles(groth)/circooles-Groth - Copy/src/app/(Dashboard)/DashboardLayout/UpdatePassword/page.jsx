"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import AuthLayout from "@/components/AuthLayout";
import { useRouter } from "next/navigation";

const UpdatePassword = () => {
  const router=useRouter()
    const [alertMessage, setAlertMessage] = useState(null); // State for alert message
  const [alertType, setAlertType] = useState(null);
  const onFinish = (values) => {

    console.log("Success:", values);
    const newpassword=values.newpassword;
    const confirmPassword=values.Confirmpassword;
    if(newpassword!==confirmPassword){
        setAlertMessage("Passwords do not match");
        setAlertType("error");
    }else{
        setAlertMessage("Password created successfully");
      setAlertType("success");
      
      router.push('/DashboardLayout/TutorDashboard')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthLayout>
      <div className=" max-w-xl mx-auto pt-32 px-4  rounded-lg">
      {alertMessage && (
          <Alert
            message={alertMessage}
            type={alertType}
            showIcon
            className="mb-4"
          />
        )}
       <div className="bg-white rounded-lg p-6 ">
       <div className="text-start">
          <h1 className="text-3xl font-bold pb-4 ">UpdatePassword</h1>
        </div>
        <div className="w-full mx-auto  ">
          <div className="flex justify-start items-center ">
            <Form
              name="page"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ width: "100%" }}
            >
                <Form.Item
                label={
                  <label
                    htmlFor="currentPasword"
                    className="text-sm text-[#344054] font-medium"
                  >
                    Current password
                  </label>
                }
                name="currentPasword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Enter new password!",
                    type: "password",
                  },
                ]}
                required={false}
              >
                <Input.Password
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter new password"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label
                    htmlFor="newpassword"
                    className="text-sm text-[#344054] font-medium"
                  >
                    New password
                  </label>
                }
                name="newpassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Enter new password!",
                    type: "password",
                  },
                ]}
                required={false}
              >
                <Input.Password
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter new password"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label
                    htmlFor="newpassword"
                    className="text-sm text-[#344054] font-medium"
                  >
                    Confirm password
                  </label>
                }
                name="Confirmpassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Enter Confirm password!",
                    type: "password",
                  },
                ]}
                required={false}
              >
                <Input.Password
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Re-enter new Password"
                />
              </Form.Item>

              <div className="flex items-center justify-end space-x-4">
              <Form.Item>
                <Button
                onClick={router.back}
                  className="text-[#FFFFFF] text-[16px] font-semibold bg-primary p-6"
                  style={{backgroundColor:"transparent",color:'#14698A',border:'1px solid #14698A'}}
                  size="large"
                  type="primary"
                 
                  block
                >
                  cancel
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  className="text-[#FFFFFF] text-[16px] font-semibold bg-primary p-6"
                  style={{backgroundColor:'#14698A'}}
                  size="large"
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Save changes
                </Button>
              </Form.Item>
              </div>
            </Form>
          </div>
        </div>

       </div>
      </div>
    </AuthLayout>
  );
};

export default UpdatePassword;
