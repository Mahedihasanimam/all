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
    const email=values.newpassword;
    const confirmemail=values.Confirmpassword;

       setAlertMessage("email created successfully");
      setAlertType("success");
      
      router.push('/DashboardLayout/TutorDashboard')
    
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
          <h1 className="text-3xl font-bold pb-4 ">UpdateEmail</h1>
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
                    htmlFor="Current email"
                    className="text-sm text-[#344054] font-medium"
                  >
                    Current email
                  </label>
                }
                name="Current email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email",
                    type: "email",
                  },
                ]}
                required={false}
              >
                <Input
                prefix={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3332 4.9987C18.3332 4.08203 17.5832 3.33203 16.6665 3.33203H3.33317C2.4165 3.33203 1.6665 4.08203 1.6665 4.9987M18.3332 4.9987V14.9987C18.3332 15.9154 17.5832 16.6654 16.6665 16.6654H3.33317C2.4165 16.6654 1.6665 15.9154 1.6665 14.9987V4.9987M18.3332 4.9987L9.99984 10.832L1.6665 4.9987" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                }
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter new password"
                />
              </Form.Item>


                <Form.Item
                label={
                  <label
                    htmlFor="Current email"
                    className="text-sm text-[#344054] font-medium"
                  >
                   Create a new email
                  </label>
                }
                name="Current email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email",
                    type: "email",
                  },
                ]}
                required={false}
              >
                <Input
                prefix={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3332 4.9987C18.3332 4.08203 17.5832 3.33203 16.6665 3.33203H3.33317C2.4165 3.33203 1.6665 4.08203 1.6665 4.9987M18.3332 4.9987V14.9987C18.3332 15.9154 17.5832 16.6654 16.6665 16.6654H3.33317C2.4165 16.6654 1.6665 15.9154 1.6665 14.9987V4.9987M18.3332 4.9987L9.99984 10.832L1.6665 4.9987" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                }
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Enter new password"
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
