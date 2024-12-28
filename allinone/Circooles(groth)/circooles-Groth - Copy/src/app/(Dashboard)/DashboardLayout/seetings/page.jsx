'use client'
import { Button, Checkbox, Image, Input, UploadProps } from "antd";
const { TextArea } = Input;
import React from "react";
import { MdEmail } from "react-icons/md";
import { Upload } from "antd";
import { message } from "antd";


const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const { Dragger } = Upload;
const SettingsPage = (props) => {
  return (
    <div className="max-w-2xl space-y-4 border p-6 rounded-md shadow-md">
      <div className="flex gap-6 ">
        <div className="w-full">
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
      <div className="flex gap-6 ">
        <div className="w-full">
          <label className="block font-medium mb-1 text-[#344054]">
            Profession
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
            placeholder="Lead UX"
          />
        </div>
        <div className="w-full">
          <label className="block font-medium mb-1 text-[#344054]">
            Company name
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
            placeholder="Google"
          />
        </div>
      </div>
      <div className="w-full">
        <label className="block font-medium mb-1 text-[#344054]">Email</label>
        <Input
          prefix={<MdEmail size={20} />}
          className="w-full"
          style={{
            height: "44px",
            borderColor: "#D0D5DD",
            color: "#667085",
            fontSize: "16px",
            fontWeight: 400,
          }}
          placeholder="emily@gmail.com"
        />
      </div>
      <div className="w-full flex gap-6 pt-6">
        <Image
          className="h-6 w-6 rounded-full"
          src="https://via.placeholder.com/150"
        />

        <div className="w-full">
          <Dragger {...props}>
            <p className="ant-upload-text text-[#1253BB] text-xl ">
              Click to upload
            </p>
            <p className="ant-upload-hint">
              or Drag an drop a
              <span className="">SVG, PNG, JPG or GIF (max. 800x400px)</span>
            </p>
          </Dragger>
        </div>
      </div>

      <div className="flex justify-end gap-4 items-center  py-6">
        <Button style={{ height: "44px", fontSize: "16px", fontWeight: 400 }}>
          Cancel
        </Button>
        <Button
          style={{ height: "44px", fontSize: "16px", fontWeight: 400 }}
          type="primary"
        >
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
