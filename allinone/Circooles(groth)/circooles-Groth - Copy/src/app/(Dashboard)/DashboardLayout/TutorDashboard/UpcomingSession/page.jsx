'use client'
import { Table, Button, Tag, Dropdown, Menu, Modal, DatePicker, message } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useState } from "react";
import avater from '/public/images/Avatar.png'
import Image from "next/image";
const UpcomingSession = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isCancelModalVisible, setCancelModalVisible] = useState(false);
  const [isRescheduleModalVisible, setRescheduleModalVisible] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCancelSession = () => {
    setCancelModalVisible(false);
    message.success("Session has been canceled.");
  };

  const handleRescheduleSession = () => {
    setRescheduleModalVisible(false);
    message.success("Session has been rescheduled.");
  };

  const menu = (record) => (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => {
          setSelectedSession(record);
          setCancelModalVisible(true);
        }}
      >
        Cancel Session
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {
          setSelectedSession(record);
          setRescheduleModalVisible(true);
        }}
      >
        Reschedule
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Session date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Session slot",
      dataIndex: "slot",
      key: "slot",
    },
    {
      title: "Learner",
      dataIndex: "learner",
      key: "learner",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Image
            src={avater}
            alt={`${record.name}`}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p>{record.name}</p>
            <p className="text-sm text-gray-500">{record.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <Tag 
        className="flex items-center space-x-2 w-fit p-4 border-none rounded-[50px] font-medium text-[14px]"
         style={{backgroundColor:'#ECFDF3',height:'22px',color:' #027A48'}} color={record.status === "Online" ? "green" : "red"}>
        <span> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#12B76A"/>
            </svg> </span><span>{record.status}</span>
        </Tag>
      ),
    },
    {
      title: "Zoom Link",
      dataIndex: "zoomLink",
      key: "zoomLink",
      render: (text) => (
        <Button
          onClick={() => {
            navigator.clipboard.writeText(text);
            message.success("Zoom link copied!");
          }}
        >
         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.9165 8.7513H2.33317C2.02375 8.7513 1.72701 8.62839 1.50821 8.40959C1.28942 8.1908 1.1665 7.89405 1.1665 7.58464V2.33464C1.1665 2.02522 1.28942 1.72847 1.50821 1.50968C1.72701 1.29089 2.02375 1.16797 2.33317 1.16797H7.58317C7.89259 1.16797 8.18934 1.29089 8.40813 1.50968C8.62692 1.72847 8.74984 2.02522 8.74984 2.33464V2.91797M6.4165 5.2513H11.6665C12.3108 5.2513 12.8332 5.77364 12.8332 6.41797V11.668C12.8332 12.3123 12.3108 12.8346 11.6665 12.8346H6.4165C5.77217 12.8346 5.24984 12.3123 5.24984 11.668V6.41797C5.24984 5.77364 5.77217 5.2513 6.4165 5.2513Z" stroke="#1253BB" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 {text || "No link"}
        </Button>
      ),
    },
    {
     
      key: "actions",
      render: (_, record) => (
        <Dropdown overlay={menu(record)} trigger={['click']}>
          <Button icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
} />
        </Dropdown>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Olivia Ryhe",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Online",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "2",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "3",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Olivia Ryhe",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Online",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "4",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "5",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Olivia Ryhe",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Online",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "6",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "7",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "8",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Olivia Ryhe",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Online",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "9",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "10",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "11",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Olivia Ryhe",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Online",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "12",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "13",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Olivia Ryhe",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Online",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "14",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "15",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Olivia Ryhe",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Online",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "16",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "17",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
    {
      key: "18",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Olivia Ryhe",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Online",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "19",
      date: "Jan 6, 2024",
      slot: "11:00 am - 12:00 pm",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Online",
      zoomLink: null,
    },
   
    // Add more data rows as needed
  ];

  return (
    <div className="p-4">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: 10,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
        }}
      />

      {/* Cancel Modal */}
      <Modal
        title="Cancel Session"
        visible={isCancelModalVisible}
        onCancel={() => setCancelModalVisible(false)}
        onOk={handleCancelSession}
      >
        <p>Are you sure you want to cancel this session?</p>
      </Modal>

      {/* Reschedule Modal */}
      <Modal
        title="Reschedule Session"
        visible={isRescheduleModalVisible}
        onCancel={() => setRescheduleModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setRescheduleModalVisible(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleRescheduleSession}
          >
            Confirm
          </Button>,
        ]}
      >
        <p>Select a new date and time:</p>
        <DatePicker
          showTime
          onChange={(value) => setSelectedDate(value)}
          className="w-full"
        />
      </Modal>
    </div>
  );
};

export default UpcomingSession;
