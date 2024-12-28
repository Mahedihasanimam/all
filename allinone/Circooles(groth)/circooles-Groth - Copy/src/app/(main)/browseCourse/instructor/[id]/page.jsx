"use client";
import React, { useState } from "react";
import { Avatar, Button, Card, Rate, Tabs } from "antd";
import Image from "next/image";

import instactor from "/public/images/Instructor2.png";
import ratingimage from "./srahkhan.png";

import { ArrowUpOutlined, GlobalOutlined, PlayCircleOutlined } from "@ant-design/icons";
import CourseCard from "@/components/ui/CourseCard";
import ReviewCard from "@/components/ui/ReviewCard";
import Link from "next/link";
const page = ({ params }) => {
  const [activeKey, setActiveKey] = useState("2");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);


  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const times = ['3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM','6:00 PM'];

  //   course card data 
  const coursemenu = [
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "40 Hours",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/17pL5Qj/caourse1.png",
      category: "All courses",
    },
    {
      id: 2,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Advanced Product Strategy - Course",
      duration: "45 Hours",
      students: 150,
      price: "€ 35.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/xLN7bSQ/category2.png",
      category: "Graphic Design",
    },
    {
      id: 3,
      instructor: "John Michael",
      rating: 4.6,
      reviews: 2987,
      courseTitle: "Product Roadmaps for Success",
      duration: "38 Hours",
      students: 200,
      price: "€ 27.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: "UI/UX Design",
    },
    {
      id: 4,
      instructor: "John Michael",
      rating: 4.8,
      reviews: 3500,
      courseTitle: "Mastering Agile Product Management",
      duration: "50 Hours",
      students: 250,
      price: "€ 40.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/xLN7bSQ/category2.png",
      category: "Programming",
    },
    {
      id: 5,
      instructor: "John Michael",
      rating: 4.9,
      reviews: 3800,
      courseTitle: "Product Leadership for Managers",
      duration: "60 Hours",
      students: 300,
      price: "€ 50.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/17pL5Qj/caourse1.png",
      category: "Artificial Intelligence",
    },
    {
      id: 6,
      instructor: "John Michael",
      rating: 4.5,
      reviews: 2800,
      courseTitle: "Foundations of Product Development",
      duration: "35 Hours",
      students: 180,
      price: "€ 25.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: "Business Management",
    },
  ];


  // review data
  const reviews = [
    {
      name: "Sarah Khan",
      avatar: ratingimage,
      rating: 5,
      time: "a month ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
    {
      name: "John Doe",
      avatar: ratingimage,
      rating: 4,
      time: "2 weeks ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
    {
      name: "Emily Smith",
      avatar: ratingimage,
      rating: 5,
      time: "3 weeks ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
    {
      name: "David Johnson",
      avatar: ratingimage,
      rating: 4,
      time: "a month ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
  ];



  return (
    <div>
      <div className="container mx-auto xl:px-6 p-4">
        <div className=" lg:mt-28 md:mt-24 mt-12  w-full ">
          <h1 className="text-3xl font-bold mb-24 text-[#1D2939] font-Merriweather">
            Instructor
          </h1>
          <div className=" p-6 ">
            {/* Profile Header */}
            <div className="">
              <Avatar size={120}>
                <Image className="w-full" src={instactor} />
              </Avatar>
              <div className="mt-4">
                <h1 className="text-xl font-semibold text-gray-800">John Doe</h1>
                <p className="text-[#475467] flex items-center space-x-2">
                  <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6663 13V2.33333C10.6663 1.97971 10.5259 1.64057 10.2758 1.39052C10.0258 1.14048 9.68663 1 9.33301 1H6.66634C6.31272 1 5.97358 1.14048 5.72353 1.39052C5.47348 1.64057 5.33301 1.97971 5.33301 2.33333V13M2.66634 3.66667H13.333C14.0694 3.66667 14.6663 4.26362 14.6663 5V11.6667C14.6663 12.403 14.0694 13 13.333 13H2.66634C1.92996 13 1.33301 12.403 1.33301 11.6667V5C1.33301 4.26362 1.92996 3.66667 2.66634 3.66667Z" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </span> <span>Head of Product Management at Google</span>
                </p>
                <p className="text-[#475467]">Los Angeles, Southern California, U.S</p>
              </div>
            </div>

            {/* Booking Section */}
            <Card className="mt-6 shadow-sm max-w-lg">
              <h2 className="text-lg font-bold text-[#1D2939] pb-2">Book John Doe</h2>
              <hr />
              <Link href={`/browseCourse/instructor/SessionSchedule`}>
              
              
              <div className="flex items-center justify-between mt-4 pb-2">
                <p className="flex items-center gap-2 text-[#344054] pb-2 text-[16px] font-semibold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 7L16 12L23 17V7Z" stroke="#14698A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="#14698A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  Online <span className="font-semibold">€15.00/session</span>
                </p>
                <hr />
                <button type="primary" className="bg-transparent border-none">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H5.83301M14.1663 5.83301V14.1663" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </button>
              </div>
              </Link>
              <hr />
              <div className="flex items-center justify-between mt-4 pb-2 opacity-40">
                <p className="flex items-center gap-2 text-[#344054] pb-2 text-[16px] font-semibold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#E4E7EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>


                  Not available
                </p>
                <hr />
                <button type="primary" className="bg-transparent border-none">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H5.83301M14.1663 5.83301V14.1663" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </button>
              </div>
            </Card>

            {/* Availability Section */}
            <div className="mt-6 max-w-2xl">
              <h2 className="text-lg font-semibold text-[#1D2939]">Availability</h2>
               {/* Day Selector */}
        <div className="grid grid-cols-7 gap-2 mb-4 w-fit">
          {days.map((day, index) => (
            <button
              key={index}
              className={`p-2 border rounded-md text-center h-[100px] w-[100px] ${
                selectedDay === day
                  ? 'bg-[#14698A] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Time Selector */}
        {selectedDay && (
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-2 mb-6 w-fit">
            {times.map((time, index) => (
              <button
                key={index}
                className={`p-2 border rounded-md text-centerc h-[100px] w-[100px] ${
                  selectedTime === time
                    ? 'bg-[#14698A] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        )}
            </div>

            {/* About Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-700">About</h2>
              <p className="mt-4 text-gray-600">
                I'm Angela, a developer with a passion for teaching. I'm the lead
                instructor at the London App Brewery, London's leading Programming
                Bootcamp. I've helped hundreds of thousands of students learn to code
                and change their lives by becoming a developer.
              </p>
              <p className="mt-2 text-blue-500 cursor-pointer">Show more</p>
            </div>
          </div>

          <div className=" bg-white ">
          <div>
        <h1 className="text-lg font-bold  text-[#475467] font-Merriweather mt-14 pb-6">
          4.2k reviews & ratings
        </h1>

        {/* Course rating and reviews here---------------------------------------------- */}
        <div className="  w-full ">


          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2  ">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
          <Link
            href={"/browseCourse/instructor/allReviewAndratings"}
            className="inline-flex items-center text-[#475467] border-b-2 border-[#475467] mt-8 text-[16px] font-semibold "
          >
            Show all reviews
            <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
          </Link>
        </div>
      </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
