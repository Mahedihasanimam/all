'use client'
import Sidebar from '@/components/dashboard/Sidebar';
import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BsStack } from 'react-icons/bs';

const layout = ({ children }) => {
    const pathname = usePathname();
    console.log(pathname)
    const getTitle = () => {
        switch (pathname) {
          case "/DashboardLayout/UserDashboard":
            return (
              <div className=" ">
                 <h1 className="text-[#333333] font-bold text-[24px] font-Merriweather pb-0">
                  Dashboard analytics
                </h1>
                
              </div>
            );
          case "/DashboardLayout/TutorDashboard":
            return (
              <div className=" ">
                 <h1 className="text-[#333333] font-bold text-[24px] font-Merriweather pb-0">
                  Dashboard analytics
                </h1>
                
              </div>
            );
          case "/createnewcourse":
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">
                  Create a new course
                </h1>
              </div>
            );
          case "/category_management":
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">
                  Manage Category
                </h1>
              </div>
            );
          case "/DashboardLayout/accountSeetings":
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">accountSeetings</h1>
              </div>
            );
          case "/DashboardLayout/TutorDashboard/Earning":
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">
                Finance
                </h1>
              </div>
            );
          case "/resources":
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">
                  Find essential resources
                </h1>
              </div>
            );
          case "/earning":
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">My Courses</h1>
              </div>
            );
          case "/webiner":
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">Webiner</h1>
              </div>
            );
          case "/recordings":
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">
                  Recorded classes
                </h1>
              </div>
            );
          case "/settings":
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">
                  Personal info
                </h1>
              </div>
            );
          case "/support":
            return (
              <div>
                <h1 className="text-[#101828] font-bold text-[24px]">
                  Get in touch
                </h1>
              </div>
            );
          case "/usermanagement":
            return (
              <div>
                <h1 className="text-[#101828] font-bold text-[24px]">
                  Welcome back, groth
                </h1>
              </div>
            );
          case "/content":
            return (
              <div>
                <h1 className="text-[#101828] font-bold text-[24px]">
                  Contents for review
                </h1>
              </div>
            );
    
          case "/settings/faq":
            // return "Settings";
            // default:
            return (
              <div>
                <h1 className="text-[#333333] font-bold text-[24px]">FAQ</h1>
              </div>
            );
        }
      };




      const handleNotifications = () => {
        console.log("clicked");
        router.push("/notifications");
      };
    return (
       <div>

<Header
          style={{
            position: "fixed",
            width: "83vw",
            top: 0,
            left: 312,
            background: "#F6F6F6",
            height: "80px",
            paddingTop: "20px",
            zIndex: 10, // Increased z-index
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div className="w-full justify-between flex items-center">
            <div className=''>{getTitle()}</div>
            <div
              onClick={handleNotifications}
              className="cursor-pointer"
              style={{ zIndex: 11 }} // Ensure the badge has a higher z-index than other elements
            >
              <Badge count={5}>
                <BellOutlined size={30} color="gray" />
              </Badge>
            </div>
          </div>
        </Header>
         <div className='flex items-center bg-gray-200'>
            {/* sidebar  */}

            <div>
                <Sidebar  />
            </div>

            {/* content area */}
          <div className='ml-[312px] w-full mt-[80px]'>
          {children}
          </div>
        </div>
       </div>
    );
};

export default layout;