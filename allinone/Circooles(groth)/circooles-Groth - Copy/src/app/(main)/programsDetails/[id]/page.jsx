"use client";
import { Card, Avatar, Button, Rate } from "antd";
import { message } from "antd";
import React, { useState } from "react";
import smartimg from "../../../assets/images/category3.png";
import instactor from "../../../assets/images/Instructor.png";
import instactor2 from "../../../assets/images/Instructor2.png";
import student from "../../../assets/images/Instructor.png";
import Image from "next/image";
import { Collapse } from "antd";
import {
  ClockCircleOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  MobileOutlined,
  CheckSquareOutlined,
  CalendarOutlined,
  CheckOutlined,
  FolderOutlined,
  FileOutlined,
  ArrowUpOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import ReviewCard from "@/components/ui/ReviewCard";
// import student from "./Instructor.png";
import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import { useRouter } from "next/navigation"; // Correct import
import { useTranslations } from "next-intl";
// import coursevideo from '/public/video/video1.mp4'
const page = ({ params }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter(); // Correct usage
  const t = useTranslations()
  // course curriculam data
  const { Panel } = Collapse;
  const panels = [
    { id: "01", title: "Getting started", time: "02:30 min", isVideo: true },
    { id: "02", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
    { id: "03", title: "Practice Project", fileSize: "5.3 MB", isVideo: false },
    { id: "04", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
    { id: "05", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
    { id: "06", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
  ];

  // review data
  const reviews = [
    {
      name: "Sarah Khan",
      avatar: student,
      rating: 5,
      time: "a month ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
    {
      name: "John Doe",
      avatar: student,
      rating: 4,
      time: "2 weeks ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
    {
      name: "Emily Smith",
      avatar: student,
      rating: 5,
      time: "3 weeks ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
    {
      name: "David Johnson",
      avatar: student,
      rating: 4,
      time: "a month ago",
      comment:
        "This is a good course for someone how does not know how to code, but is interested.Each lection has projects, this is an enormous help to internalize the code. Additionally, for some projects, you need to use Google to get some specific help to get your code to work.I've learned how to code with this course, and would definitely recommend it!",
    },
  ];

  // FAKE JSON DATA FOR DEMO PURPOSES ONLY
  const courseone = [
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
  ];
  const coursetwo = [
    {
      id: 8,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Analytics for Beginners",
      duration: "48 Hours",
      students: 220,
      price: "€ 33.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/17pL5Qj/caourse1.png",
      category: "Sports",
    },
    {
      id: 9,
      instructor: "John Michael",
      rating: 4.6,
      reviews: 3100,
      courseTitle: "Building Digital Products",
      duration: "55 Hours",
      students: 210,
      price: "€ 37.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: "All courses",
    },
  ];
  const [messageApi, contextHolder] = message.useMessage();

  const handleAddToCart = () => {
    messageApi.open({
      type: 'success',
      content: 'add to cart success',
    });

    console.log("Added to cart");
    router.push('/checkout')
  };


  const courses = Array(9).fill({
    title: 'Basic Data Science: R Basics',
    description: 'Build a foundation in R and learn how to wrangle, analyze, and visualize data.',
    details: '1-2 hours/week, for 8 weeks',
  });
  return (
    <div>
      {contextHolder}
      <div>
        <div className="mb-10  ">
          {/* hero section here ---------------------------------------------------------------------------- */}
          <div className="xl:bg-[#1D2939] lg:bg-[#1D2939]   bg-transparent ">
            <div className="container mx-auto  flex gap-4 relative py-6 lg:px-6 px-2">
              {/* left side content here-------------------------------------------- */}
              <div className="xl:max-w-2xl lg:max-w-xl w-full space-y-3 xl:block lg:block  hidden ">
                <h1 className="text-white text-2xl font-bold font-Merriweather">
                  {t("Product Management Basic Course")}
                </h1>
                <div className="flex items-start justify-start mb-2">
                  <span className="text-yellow-500 text-sm flex items-center justify-center">
                    <Rate
                      className="text-xl"
                      allowHalf
                      count={1}
                      defaultValue={4.7}
                    />{" "}
                    <span className="text-[#FFFFFF] font-bold text-[14px]">
                      4.7
                    </span>
                  </span>
                  <span className="text-[#FFFFFF] font-normal text-sm ml-2 pt-1">
                    (65655)
                  </span>
                </div>
                <p className="text-[#D0D5DD] text-sm font-normal pb-4">
                  {("Learn Product Management like a Professional. Start from the fundamentals and go all the way to mastering product strategy,development, and market launch.")}
                </p>

                <div className="bg-[#344054] p-6 rounded-sm  ">
                  <div className="flex items-center justify-start px-2">
                    <Image
                      src={instactor}
                      alt="instructor"
                      className=" rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-[14px] text-white font-bold border-b border-white ">
                        Johon Doe
                      </h3>
                      <p className="text-[#D0D5DD] text-sm">{t("Instructor")}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-16 px-2 pt-4 ">
                    <div>
                      <ul className="list-none text-[#E4E7EC] text-sm space-y-4">
                        <li className="flex items-center space-x-2">
                          {" "}
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99992 3.99967V7.99967L10.6666 9.33301M14.6666 7.99967C14.6666 11.6816 11.6818 14.6663 7.99992 14.6663C4.31802 14.6663 1.33325 11.6816 1.33325 7.99967C1.33325 4.31778 4.31802 1.33301 7.99992 1.33301C11.6818 1.33301 14.6666 4.31778 14.6666 7.99967Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <span> 40+ Hours</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          {" "}
                          <span> <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 6.33333L7 8.33333L13.6667 1.66667M13 7V11.6667C13 12.0203 12.8595 12.3594 12.6095 12.6095C12.3594 12.8595 12.0203 13 11.6667 13H2.33333C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H9.66667" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg></span>
                          <span>Quiz</span>

                        </li>
                        <li className="flex items-center space-x-2">
                          {" "}
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00008 11.9997H7.00675M3.00008 1.33301H11.0001C11.7365 1.33301 12.3334 1.92996 12.3334 2.66634V13.333C12.3334 14.0694 11.7365 14.6663 11.0001 14.6663H3.00008C2.2637 14.6663 1.66675 14.0694 1.66675 13.333V2.66634C1.66675 1.92996 2.2637 1.33301 3.00008 1.33301Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <span>Access on Mobile & TV</span>
                        </li>

                        <li className="flex items-center space-x-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6667 1.33301V3.99967M5.33333 1.33301V3.99967M2 6.66634H14M3.33333 2.66634H12.6667C13.403 2.66634 14 3.26329 14 3.99967V13.333C14 14.0694 13.403 14.6663 12.6667 14.6663H3.33333C2.59695 14.6663 2 14.0694 2 13.333V3.99967C2 3.26329 2.59695 2.66634 3.33333 2.66634Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <span>Last updated on 15/07/2024</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              {/* right side content here-------------------------------------------------- */}
              <div className="xl:max-w-xl lg:max-w-lg  w-full   mx-auto bg-white border-2 border-[#dee0e2]  rounded-lg  lg:absolute block xl:right-[9%]  lg:right-[1%] max-[1440]:fixed max-[1024]:right-[6px] max-[1440]:fixed max-[1440]:right-[0%] lg:shadow-lg z-50   w-[465px] max-h-screen">
              

                <div className=" p-4 ">
                <Image className="w-full max-h-[300px]" src={smartimg}/>
                <div className="  xl:max-w-2xl lg:max-w-xl w-full">
              <h1 className="text-3xl font-bold my-2 italic">you'll learn</h1>
              <div>
                <ul className="list-none lg:text-[14px] md:text-[14px] text-sm text-[#475467] font-normal  space-y-[20px] py-2 pb-8">
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                      {(" You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {" "}
                      {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <CheckOutlined className="" />
                    <li>
                      {("You will learn the core principles of product management, including market research, product development, and roadmap planning.")}
                    </li>
                  </div>
                </ul>
              </div>
            </div>
     
                </div>
              </div>
            </div>
          </div>

          <div className=" container mx-auto lg:px-6 px-2 ">
     
     
            {/* Course curriculum section here ------------- */}
            <div className="xl:max-w-2xl lg:max-w-xl w-full my-12 border border-[#D9D9D9] rounded-lg p-4">
              <h1 className="text-3xl font-normal mb-8 italic">Courses in this Program</h1>

      

              {/* course outline here----------------------------------------------------------- */}
              <div className=" mx-auto bg-[#ffffff] rounded-md  p-1 border-none">
              <Collapse  expandIconPosition="end" accordion className="bg-white border-none p-2">
        {courses.map((course, index) => (
          <Panel
          style={{marginTop:'10px',border:'1px solid #98A2B3',borderRadius:'10px',padding:'6px'}}
            header={
              <div className="flex items-center">
                <span className="mr-3 text-[16px] bg-[#F2F4F7] px-[10px] py-[6px] rounded-lg font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#344054]">{course.title}</h3>
                  {index === 0 && (
                    <p className="text-xs text-gray-500">{course.details}</p>
                  )}
                </div>
              </div>
            }
            key={index}
            className="mb-2"
          >
            <p className="text-sm text-[#667085]">{course.description}</p>
            {index === 0 && (
              <a href="#" className=" text-sm underline text-[16px] font-semibold text-[#195671]">
                View the Course
              </a>
            )}
          </Panel>
        ))}
      </Collapse>
              </div>
            </div>

            {/* Course rating and reviews here---------------------------------------------- */}
            <div className="lg:mt-28 md:mt-24 xl:max-w-2xl lg:max-w-xl w-full ">
              <h1 className="text-3xl font-bold mb-8 text-[#1D2939] font-Merriweather">
                {" "}
                <Rate
                  className="text-4xl text-[#FDB022] "
                  count={1}
                  defaultValue={4.7}
                />
                <span className="px-4">4.5 </span> {t("Course Rating")}{" "}
                <span className="text-lg text-[#475467] font-Inter">
                  (4.2k students reviewed)
                </span>
              </h1>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-10">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
              <Link
                href={" #"}
                className="inline-flex items-center text-[#475467] border-b-2 border-[#475467] mt-8 text-[16px] font-semibold "
              >
                {t("Show all reviews")}
                <ArrowUpOutlined className="rotate-45 text-xl pl-2" />
              </Link>
            </div>

         

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
