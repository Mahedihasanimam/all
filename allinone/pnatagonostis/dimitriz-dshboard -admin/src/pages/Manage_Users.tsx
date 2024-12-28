import React, { useState } from "react";
import { Table, Tag, Avatar, Modal, Select, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import imageone from '../assets/Images/dashboard/Avatar.png'

const initialData = [
  {
    key: "1",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    status: "Approved",
    role: "admin",
    profile: imageone,
  },
  {
    key: "2",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "member",
    profile: imageone,
  },
  {
    key: "3",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    status: "Approved",
    role: "admin",
    profile: imageone,
  },
  {
    key: "4",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "member",
    profile: imageone,
  },
  {
    key: "5",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    status: "Approved",
    role: "admin",
    profile: imageone,
  },
  {
    key: "6",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "member",
    profile: imageone,
  },
  {
    key: "7",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "member",
    profile: imageone,
  },
  {
    key: "8",
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    status: "Approved",
    role: "admin",
    profile: imageone,
  },
  {
    key: "9",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    status: "Pending",
    role: "member",
    profile: imageone,
  },
];

const Manage_Users = () => {
  const [data, setData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentKey, setCurrentKey] = useState(null);
  const [newRole, setNewRole] = useState("");

  // Open modal to edit the role
  const handleEdit = (key) => {
    const record = data.find((item) => item.key === key);
    setNewRole(record.role);
    setCurrentKey(key);
    setIsModalVisible(true);
  };

  // Handle role change in modal
  const handleRoleChange = (value) => {
    setNewRole(value);
  };

  // Save changes to the role
  const saveChanges = () => {
    const updatedData = data.map((item) => {
      if (item.key === currentKey) {
        item.role = newRole;
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
      title: "User",
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
      title: "Role",
      dataIndex: "role",
      render: (role) => <p>{role}</p>,
    },
    {
      title: "Email Address",
      dataIndex: "email",
    },
    {
      title: "Action",
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
      <div className="text-xl font-semibold mb-4">Users</div>
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

      {/* Modal for editing the role */}
      <Modal
        title="Edit Role"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={saveChanges}
      >
        <div className="mb-4">
          <div className="font-semibold">Role</div>
          <Select
            defaultValue={newRole}
            style={{ width: "100%" }}
            onChange={handleRoleChange}
          >
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="member">Member</Select.Option>
    
          </Select>
        </div>
      </Modal>
    </div>
  );
};

export default Manage_Users;
