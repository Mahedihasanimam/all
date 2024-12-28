'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import { useRouter } from "next/navigation";
import { Avatar, Input, Layout, Menu, Popover } from "antd";
import {
  SearchOutlined,
  PlayCircleFilled,
  LogoutOutlined,
  UserOutlined,
  LockFilled,
  UserAddOutlined,
} from "@ant-design/icons";
import { HiOutlineSupport } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import Swal from "sweetalert2";

const { Sider } = Layout;
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
const Sidebar = () => {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlemobilemenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const tutorMenuItems = [
    {
      path: "/DashboardLayout/TutorDashboard",
      title: "Dashboard",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 20V10M12 20V4M6 20V14" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    },
    {
      path: "/DashboardLayout/TutorDashboard/UpcomingSession",
      title: "Upcoming Session",
      icon: <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1H1V16H8C8.79565 16 9.55871 16.3161 10.1213 16.8787C10.6839 17.4413 11 18.2044 11 19M11 5V19M11 5C11 3.93913 11.4214 2.92172 12.1716 2.17157C12.9217 1.42143 13.9391 1 15 1H21V16H14C13.2044 16 12.4413 16.3161 11.8787 16.8787C11.3161 17.4413 11 18.2044 11 19" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    },
    {
      path: "/TutorProfileSetup",
      title: "Tutor Profile Setup",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      
    },
    {
      path: "/Verification",
      title: "Verification",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8M14.5 19L16.5 21L21 16.5" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      
      
      
    },
    {
      path: "/DashboardLayout/TutorDashboard/Earning",
      title: "Earning",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 10H23M3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      
      
      
    },
  ];

  const bottomMenuItems= [

    {
      id:'2',
      path: "/DashboardLayout/TutorDashboard/accountSeetings",
      title: "Settings",
      icon: <IoSettingsOutline size={20} color="#667085" />,
    },
  ];

  const content = (
    <div className="w-40">
      <p className="mb-2">
        <Link  href="/profile" className="flex items-center gap-2">
          <UserOutlined size={18} /> <span className="text-md">Profile</span>
        </Link>
      </p>
      <p className="mb-3">
        <Link href="/change-password" className="flex items-center gap-2">
          <LockFilled size={18} /> <span className="text-md">Change Password</span>
        </Link>
      </p>
    </div>
  );

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged out!", "You're logged out.", "success");
        router.push("/auth/login");
      }
    });
  };

  // Render nothing until client-side hydration
  if (!isMounted) return null;

  return (
    <div>
      {/* Mobile menu button */}
      <div className="absolute top-2 xl:hidden lg:hidden block left-4 w-full h-16 z-50">
        {/* mobile menu  */}
        <button onClick={handlemobilemenu}>
          {mobileMenu ? (
            <IoMdMenu size={25} style={{ color: "#0E68E7" }} />
          ) : (
            <RxCross2 size={25} style={{ color: "#0E68E7" }} />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <Sider
      width={312}
        className={`bg-white sidebar-menu  ${mobileMenu ? "hidden" : "block"} absolute xl:block lg:block overflow-scroll  `}
        style={{
          position: "fixed",
          width: 312,
          left: 0,
          top: 0,
          bottom: 0,
          background: "#ffffff",
        }}
      >
        <img src={logo.src} alt="Logo" className="mx-auto py-6 w-[264px]" />
        <div className="px-2">
          <Input
            placeholder="Search"
            className="w-full mt-4 px-4 py-2 mb-6"
            prefix={<SearchOutlined className="text-xl text-gray-500" />}
          />
        </div>
       <div className="h-[calc(100vh-300px)]">
       <Menu mode="inline" style={{ background: "#ffffff", color: "black" }}>
          {tutorMenuItems.map((item, index) => (
            <Menu.Item
              key={`item-${index}`}
              icon={item.icon}
              style={{
                color: router.pathname === item.path ? "red" : "#000000",
                fontWeight: router.pathname === item.path ? "bold" : "normal",
                fontSize: "16px",
              }}
            >
              <Link className="font-bold" href={item.path}>{item.title}</Link>
            </Menu.Item>
          ))}

 

        <div className="py-4  mt-[350px]">
              {bottomMenuItems.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                  <Menu.Item
                    key={item?.id}
                    icon={item.icon}
                    style={{
                      color: isActive ? "blue" : "#fff",
                      fontWeight: isActive ? "bold" : "normal",
                      fontSize: "16px",
                      padding: "0 10px",
                      backgroundColor: isActive ? "#F2F5FC" : "transparent",
                    }}
                  >
                    <Link href={item.path}>{item.title}</Link>
                  </Menu.Item>
                );
              })}
        </div>
        </Menu>
       </div>

        <div className="flex gap-8 mt-6 px-4">
          <Popover className="cursor-pointer" placement="bottom" content={content}>
            <Avatar
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "gray",
              }}
              icon={<UserAddOutlined />}
            />
          </Popover>
          <div>
            <h1 className="text-black text-sm">John Doe</h1>
            <h1 className="text-black text-sm">ex@ample.com</h1>
          </div>
          <div onClick={handleLogout} className="cursor-pointer text-red-500">
            <LogoutOutlined size={20} />
          </div>
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
