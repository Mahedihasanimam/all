import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { Link } from "react-router-dom";

const SetNewPassword: React.FC = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // State for alert message
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const onFinish = (values: { newpassword: string; Confirmpassword: string }) => {
    console.log("Success:", values);
    const { newpassword, Confirmpassword } = values;

    if (newpassword !== Confirmpassword) {
      setAlertMessage("Passwords do not match");
      setAlertType("error");
    } else {
      setAlertMessage("Password created successfully");
      setAlertType("success");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (

      <div className="max-w-md w-full mx-auto pt-32 px-4">
        {alertMessage && (
          <Alert
            message={alertMessage}
            type={alertType}
            showIcon
            className="mb-4"
          />
        )}
        <div className="text-start">
          <h1 className="text-3xl font-bold mb-4">Create a new password</h1>
        </div>
        <div className="lg:max-w-lg w-full mx-auto pt-8">
          <div className="flex justify-start items-center">
            <Form
              name="create-password"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ maxWidth: "400px", width: "100%" }}
            >
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
                    message: "Please input your new password!",
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
                    htmlFor="Confirmpassword"
                    className="text-sm text-[#344054] font-medium"
                  >
                    Confirm password
                  </label>
                }
                name="Confirmpassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                ]}
                required={false}
              >
                <Input.Password
                  className="border border-[#D0D5DD] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                  placeholder="Re-enter new Password"
                />
              </Form.Item>

              <Form.Item>
               <Link to="/">
               <Button
                  className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                  size="large"
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Submit
                </Button>
               </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
  );
};

export default SetNewPassword;
