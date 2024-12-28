import React, { useState } from "react";
import { Table, Tag, Avatar, Checkbox, Modal, Select, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import imageone from '../../assets/Images/dashboard/Avatar.png'; // User profile image
import banner from '../../assets/Images/dashboard/Finance.png'; // Banner image (if needed)

const initialData = [
  {
    key: "1",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    status: "Approved",
    role: "Product Designer",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
  {
    key: "2",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "Product Manager",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
  {
    key: "3",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    status: "Approved",
    role: "Product Designer",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
  {
    key: "4",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "Product Manager",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
  {
    key: "5",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    status: "Approved",
    role: "Product Designer",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
  {
    key: "6",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "Product Manager",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
  {
    key: "7",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    status: "Approved",
    role: "Product Designer",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
  {
    key: "8",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "Product Manager",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
  {
    key: "9",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    status: "Approved",
    role: "Product Designer",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
  {
    key: "10",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "Product Manager",
    course: "Web Design for Beginners",
    profile: imageone, // Profile image
    bannerimg: banner, // Banner image (if used somewhere)
  },
];

const InstructorsTable = () => {
  const [data, setData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentKey, setCurrentKey] = useState(null);
  const [newRole, setNewRole] = useState("");
  const [newStatus, setNewStatus] = useState("");

  // Toggle between "Approved" and "Pending"
  const toggleStatus = (key) => {
    const updatedData = data.map((item) => {
      if (item.key === key) {
        item.status = item.status === "Approved" ? "Pending" : "Approved";
      }
      return item;
    });
    setData(updatedData);
  };

  // Open modal to edit role and status
  const handleEdit = (key) => {
    const record = data.find((item) => item.key === key);
    setNewStatus(record.status);
    setNewRole(record.role);
    setCurrentKey(key);
    setIsModalVisible(true);
  };

  // Handle status change in modal
  const handleStatusChange = (value) => {
    setNewStatus(value);
  };



  // Save changes to the role and status
  const saveChanges = () => {
    const updatedData = data.map((item) => {
      if (item.key === currentKey) {
        item.role = newRole;
        item.status = newStatus;
      }
      return item;
    });
    setData(updatedData);
    setIsModalVisible(false);
  };

  // Delete record from the data
  const deleteRecord = (key) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
  };

  const columns = [
    {
      title: "",
      dataIndex: "select",
      render: () => <Checkbox />,
      width: 50,
    },
    {
      title: "Company",
      dataIndex: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar src={record.profile} />
          <div>
            <p className="font-semibold">{text}</p>
            <p className="text-gray-500">{record.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Tag
          color={status === "Approved" ? "green" : "red"}
          className="capitalize cursor-pointer"
         
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (role) => <p>{role}</p>,
    },
    {
      title: "Requested for review",
      dataIndex: "course",
      render: (course,record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.bannerimg}
            alt="Course"
            className="w-10 h-10 rounded-md"
          />
          <p>{course}</p>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <EditOutlined 
            className="text-blue-500 cursor-pointer text-2xl"
            onClick={() => handleEdit(record.key)}
          />
          <DeleteOutlined
            className="text-red-500 cursor-pointer text-2xl"
            onClick={() => deleteRecord(record.key)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="text-xl font-semibold mb-4">Total Instructors</div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          position: ["bottomRight"],
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        bordered
        rowClassName="bg-white hover:bg-gray-100"
        className="shadow-sm rounded-lg"
      />

      {/* Modal for editing the role and status */}
      <Modal
        title="Edit User"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={saveChanges}
      >
        <div className="mb-4">
          <div className="font-semibold">Status</div>
          <Select
            value={newStatus}
            style={{ width: "100%" }}
            onChange={handleStatusChange}
          >
            <Select.Option value="Approved">Approved</Select.Option>
            <Select.Option value="Pending">Pending</Select.Option>
          </Select>
        </div>
   
      </Modal>
    </div>
  );
};

export default InstructorsTable;
