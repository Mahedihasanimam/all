import React, { useState } from "react";
import { Button, Dropdown, Menu, Input, Modal,Typography } from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  MenuOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";

import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
const { Paragraph } = Typography;
const props: UploadProps = {
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

interface Lecture {
  id: number;
  name: string;
}

const CurriculumSection: React.FC = () => {
  const [video, setVideo] = useState<string | null>(null);
  const [lectures, setLectures] = useState<Lecture[]>([
    { id: 1, name: "Lecture name" },
    { id: 2, name: "Lecture name" },
    { id: 3, name: "Lecture name" },
  ]);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalContent, setModalContent] = useState<string>("");
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("");
  const [currentEditingLecture, setCurrentEditingLecture] =
    useState<Lecture | null>(null);


     // Helper function to handle video preview
  const handlePreviewVideo = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setVideo(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handles adding a new lecture
  const handleAddLecture = () => {
    const newLecture: Lecture = { id: Date.now(), name: "Lecture name" };
    setLectures([...lectures, newLecture]);
  };

  // Handles deleting a lecture
  const handleDeleteLecture = (id: number) => {
    setLectures(lectures.filter((lecture) => lecture.id !== id));
  };

  // Handles saving the edited lecture name
  const handleSaveEditLecture = (newName: string) => {
    if (currentEditingLecture) {
      setLectures(
        lectures.map((lecture) =>
          lecture.id === currentEditingLecture.id
            ? { ...lecture, name: newName }
            : lecture
        )
      );
      setEditModalVisible(false); // Close the edit modal after saving
    }
  };

  // Handles showing the edit modal for a lecture
  const showEditModal = (lecture: Lecture) => {
    setCurrentEditingLecture(lecture); // Set the lecture that is being edited
    setEditModalVisible(true); // Show the edit modal
  };

  // Handles menu click for dynamic modals (Video, Attach File, etc.)
  const handleMenuClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem); // Set the menu item that was clicked
    setModalTitle(menuItem); // Set modal title dynamically based on menu item
    setModalVisible(true); // Show modal
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => handleMenuClick("Video")}>
        Video
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleMenuClick("Attach File")}>
        Attach File
      </Menu.Item>
      <Menu.Item key="4" onClick={() => handleMenuClick("Description")}>
        Description
      </Menu.Item>
      <Menu.Item key="5" onClick={() => handleMenuClick("Lecture Notes")}>
        Lecture Notes
      </Menu.Item>
    </Menu>
  );

  // Renders dynamic content inside the modal based on selectedMenuItem
  const renderModalContent = () => {
    switch (selectedMenuItem) {
      case "Video":
        return (
          <>
           <div className="flex  items-center border p-4 rounded-md gap-4 w-full">
          {video ? (
            <video
              src={video}
              controls
              className="w-full h-48 object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-gray-500">No video uploaded</span>
            </div>
          )}
          <div className="flex flex-col items-center">
            <Paragraph className="mt-4 text-center">
              Great promo videos boost enrollment by 5X, and exceptional ones
              can increase it to 10X.
            </Paragraph>
            <Upload
              beforeUpload={(file) => {
                handlePreviewVideo(file);
                return false; // Prevent auto-upload
              }}
              showUploadList={false}
            >
              <Button
                icon={<VideoCameraOutlined />}
                className="bg-gray-200 mt-4"
              >
                Upload Video
              </Button>
            </Upload>
          </div>
        </div>
          </>
        
        );
      case "Attach File":
        return (
          <>
            <Dragger {...props}>
              <p className="ant-upload-text">Attach File</p>
              <p className="ant-upload-hint">
                Drag an drop a file or{" "}
                <span className="underline">browse file</span>
              </p>
            </Dragger>
            <b className="text-[#1D2026] font-normal text-sm my-6">
              <span className="font-semibold ">Note: </span>All files should be
              at least 720p and less than 4.0 GB.
            </b>
          </>
        );
      case "Captions":
        return (
          <Input.TextArea
            className="mt-4"
            style={{ height: 160 }}
            placeholder="Write your lecture caption here..."
          />
        );
      case "Description":
        return (
          <Input.TextArea
            className="mt-4"
            style={{ height: 160 }}
            placeholder="Write your lecture description here..."
          />
        );
      case "Lecture Notes":
        return (
          <>
            <Input.TextArea
              className="my-4"
              style={{ height: 160 }}
              placeholder="Write your lecture Notes here..."
            />
            <Dragger {...props}>
              <p className="ant-upload-text">Uploads Notes</p>
              <p className="ant-upload-hint">
                Drag an drop a file or{" "}
                <span className="underline">browse file</span>
              </p>
            </Dragger>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      {/* Section Title */}
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Sections 01: Section name</h2>
          <div className="space-x-2">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="bg-blue-500 hover:bg-blue-600"
              onClick={handleAddLecture}
            />
            <Button type="primary" icon={<DeleteOutlined />} danger />
          </div>
        </div>
      </div>

      {/* Lectures List */}
      {lectures.map((lecture) => (
        <div
          key={lecture.id}
          className="flex justify-between items-center mb-4 border p-4 rounded-lg"
        >
          <div className="text-[#1D2026] flex item-center gap-2">
            <MenuOutlined className="text-lg" />
            <p className="text-lg text-[#1D2026]">{lecture.name}</p>
          </div>

          <div className="flex items-center space-x-4">
            <Dropdown
              className="bg-[#D8F0FF] text-[#1253BB] font-semibold text-sm"
              overlay={menu}
            >
              <Button className="p-5 border-none">
                contents <MoreOutlined />
              </Button>
            </Dropdown>

            {/* Edit Icon to trigger edit modal */}
            <EditOutlined
              className="cursor-pointer text-xl text-[#98A2B3]"
              onClick={() => showEditModal(lecture)}
            />
            <DeleteOutlined
              className="cursor-pointer text-xl text-red-500"
              onClick={() => handleDeleteLecture(lecture.id)}
            />
          </div>
        </div>
      ))}

      {/* Add Section Button */}
      <Button
        type="dashed"
        className="w-full bg-[#D8F0FF] h-[48px] text-[#1253BB] font-semibold"
        onClick={handleAddLecture}
      >
        Add Sections
      </Button>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button className="h-[48px] text-[#475467] text-[16px] border-none font-semibold">
          Previous
        </button>
        <Button
          type="primary"
          className="bg-[#1253BB] hover:bg-blue-600 h-[48px]"
        >
          Save & Next
        </Button>
      </div>

      {/* Dynamic Modal for Menu Items */}
      <Modal
        className=""
        title={modalTitle}
        visible={modalVisible}
        okButtonProps={{
          style: { backgroundColor: "#0E68E7", borderColor: "#FFFFFF" },
          className: "custom-ok-button p-5 mt-6",
          type: "primary",
        }}
        cancelButtonProps={{
          className: "custom-ok-button  p-5",
        }}
        okText="Save changes"
        onCancel={() => setModalVisible(false)}
        onOk={() => setModalVisible(false)}
      >
        {renderModalContent()}
      </Modal>

      {/* Edit Modal for Editing Lecture Name */}
      <Modal
        title={
          <label className="text-[16px] font-medium text-[#1D2026]l">
            Edit Section Name
          </label>
        }
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        okButtonProps={{
          style: { backgroundColor: "#0E68E7", borderColor: "#FFFFFF" },
          className: "custom-ok-button p-6",
          type: "primary",
        }}
        cancelButtonProps={{
          className: "custom-ok-button  p-6",
        }}
        okText="Save changes"
        onOk={() => handleSaveEditLecture(currentEditingLecture?.name || "")}
      >
        <hr />
        <br />
        <Input
          style={{
            width: "100%",
            height: "44px",
            borderColor: "#D0D5DD",
            color: "#667085",
            fontSize: "16px",
            fontWeight: 400,
          }}
          placeholder="Write your section name here.."
          defaultValue={currentEditingLecture?.name}
          onChange={(e) =>
            setCurrentEditingLecture((prev) =>
              prev ? { ...prev, name: e.target.value } : null
            )
          }
        />
      </Modal>
    </div>
  );
};

export default CurriculumSection;
