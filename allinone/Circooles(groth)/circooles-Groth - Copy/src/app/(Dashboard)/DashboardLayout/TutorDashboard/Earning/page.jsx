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
  
      >
       Cancel Withdraw
      </Menu.Item>
      
    </Menu>
  );

  const columns = [
    {
      title: "date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
      render:(_,record)=>(
        <p> $ {record.Amount}</p>
      ),
      
    
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <div 
        classAmount={`flex items-center space-x-2 w-fit p-4 border-none rounded-[50px] font-medium text-[14px]`}
         style={{height:'22px'}} >
        <span className={` text-[14px] font-bold 
        
        
        ${record?.status==='Pending' && 'text-[#F79009]'}
        
         ${record?.status==='Completed' && 'text-[#039855]'}
         ${record?.status==='Canceled' && 'text-[#D92D20]'}
        
        
        `}>{record.status}</span>
        </div>
      ),
    },
   
    {
     title:'actions',
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
      method: "Mastercards",
      Amount: "100",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Canceled",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "2",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Completed",
      zoomLink: null,
    },
    {
      key: "3",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "100",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Pending",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "4",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Pending",
      zoomLink: null,
    },
    {
      key: "5",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "100",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Pending",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "6",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Pending",
      zoomLink: null,
    },
    {
      key: "7",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Pending",
      zoomLink: null,
    },
    {
      key: "8",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "100",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Pending",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "9",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Pending",
      zoomLink: null,
    },
    {
      key: "10",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Pending",
      zoomLink: null,
    },
    {
      key: "11",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "100",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Pending",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "12",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Pending",
      zoomLink: null,
    },
    {
      key: "13",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "100",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Canceled",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "14",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Canceled",
      zoomLink: null,
    },
    {
      key: "15",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "100",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Canceled",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "16",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Canceled",
      zoomLink: null,
    },
    {
      key: "17",
      date: "Jan 6, 2024",
      method: "Mastercards",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Canceled",
      zoomLink: null,
    },
    {
      key: "18",
      date: "Jan 6, 2024",
      method: "11:00 am - 12:00 pm",
      Amount: "100",
      email: "olivia@untitledui.com",
      avatar: "/avatar1.jpg",
      status: "Canceled",
      zoomLink: "https://zoom.us/",
    },
    {
      key: "19",
      date: "Jan 6, 2024",
      method: "11:00 am - 12:00 pm",
      Amount: "250",
      email: "phoenix@untitledui.com",
      avatar: "/avatar2.jpg",
      status: "Canceled",
      zoomLink: null,
    },
   
    // Add more data rows as needed
  ];

  return (
    <div classAmount="p-4 bg-white">
        <h1 classAmount="text-[16px] font-medium text-[#1D2026] bg-white ">Transaction history</h1>
    <div classAmount="p-4">
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
          classAmount="w-full"
        />
      </Modal>
    </div>
    </div>
  );
};

export default UpcomingSession;
