import React, { useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import { GrDocumentVerified } from "react-icons/gr";
import { IoIosTrophy } from "react-icons/io";
import { LuCrown } from "react-icons/lu";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Card, Progress, Button, Rate, Image } from "antd";
import {
    ClockCircleOutlined,
    UsergroupDeleteOutlined,
  } from "@ant-design/icons";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard from "../mycourse/CourseCard";
import { BiRightArrow } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
const Mycourses: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const cardData = [
    {
      id: 1,
      icon: (
        <PlayCircleOutlined style={{ fontSize: "30px", color: "#0E68E7" }} />
      ),
      title: "684",
      description: "Enrolled Courses",
    },
    {
      id: 2,
      icon: (
        <GrDocumentVerified style={{ fontSize: "30px", color: "#7F56D9" }} />
      ),
      title: "03",
      description: "Active course",
    },
    {
      id: 3,
      icon: <IoIosTrophy style={{ fontSize: "30px", color: "#039855" }} />,
      title: "486",
      description: "Completed Courses",
    },
  ];
  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex);
  };


  const coursemenu = [
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "40 Hours",
      students: 176,
      price: 29.00,
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
      price: 35.00,
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
      price: 27.00,
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: "UI/UX Design",
    }
  ];
  return (
    <div className="bg-white p-6">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4  mt-[12px]">
        {cardData.map((card, index) => {
          const bgColors = ["bg-[#ECFDF3]", "bg-[#F9F5FF]", "bg-[#FEF3F2]"]; // Define your background colors here
          const selectedBgColor =
            selectedCard === index
              ? "bg-[#D8F0FF]"
              : bgColors[index % bgColors.length]; // Use different bg color for each index

          return (
            <div
              key={card.id}
              className={`flex justify-between items-center rounded-2xl cursor-pointer ${selectedBgColor}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="flex gap-4 p-6 w-fit">
                <div
                  className={`bg-[#F6F6F6] px-6 py-6 rounded-xl flex items-center justify-center ${
                    selectedCard === index
                      ? "bg-white text-[#0E68E7]"
                      : "px-4 bg-[#FFFFFF]"
                  }`}
                >
                  {card.icon}
                </div>
                <div>
                  <h1 className="text-[24px] font-semibold">{card.title}</h1>
                  <p className="text-sm text-[#4E5566] font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:flex flex-wrap gap-8 justify-between items-center my-8">
      <Card
          className="max-w-2xl w-full p-4"
          style={{
            backgroundColor: "#6941C6", // Dark green background
            borderRadius: "12px",

            padding: "20px",
            color: "#fff",
          }}
          bodyStyle={{ padding: 0 }}
        >
          <div
          className="xl:flex flex-wrap"
            style={{
             
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Progress
              type="circle"
              className="rounded-full"
              percent={66}
              width={180}
              strokeColor={{
                "0%": "#9E77ED", // Gradient start
                "100%": "#9E77ED", // Gradient end
              }}
              format={() => (
                <div>
                  <strong className="text-[36px] font-bold text-white">86%</strong>
                  <p className="font-semibold" style={{ fontSize: "12px", color: "#FFFFFF", margin: 5}}>completed</p>
                </div>
              )}
            />
            <div>
              <div
                style={{
                  textAlign: "right",
                  color: "#D7CCC8",
                  fontSize: "14px",
                }}
              >
                <div className="">
                    <span className="py-4 rounded-full px-6 bg-white text-[#475467] text-[14px]">17/28</span>
                </div>
              </div>
              <div className="pr-12" style={{ marginTop: "10px", color: "#fff" }}>
                <h3 className="text-white font-bold text-[24px]">3D Illustration</h3>
                <p className="text-white text-lg font-semibold">Instructor: John Doe</p>
              </div>
              <Button
              className="py-6 px-12"
            type="primary"
            style={{
              marginTop: "16px",
              backgroundColor: "#fff",
              color: "#000000",
            fontWeight: "bold",
              display: "flex",
            
            }}
           
          >
            Continue <ArrowUp className="rotate-90"/>
          </Button>
            </div>
          </div>

          
     </Card>

        <Card
          className=" max-w-2xl w-full p-4"
          style={{
            backgroundColor: "#006838", // Dark green background
            borderRadius: "12px",

            padding: "20px",
            color: "#fff",
          }}
          bodyStyle={{ padding: 0 }}
        >
          <div
            className="xl:flex flex-wrap"
            style={{
              
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Progress
              type="circle"
              className="rounded-full"
              percent={66}
              width={180}
              strokeColor={{
                "0%": "#66BB6A", // Gradient start
                "100%": "#388E3C", // Gradient end
              }}
              format={() => (
                <div>
                  <strong className="text-[36px] font-bold text-white">66%</strong>
                  <p className="font-semibold" style={{ fontSize: "12px", color: "#FFFFFF", margin: 5}}>completed</p>
                </div>
              )}
            />
            <div>
              <div
                style={{
                  textAlign: "right",
                  color: "#D7CCC8",
                  fontSize: "14px",
                }}
              >
                <div className="">
                    <span className="py-4 rounded-full px-6 bg-white text-[#475467] text-[14px]">17/28</span>
                </div>
              </div>
              <div className="pr-12" style={{ marginTop: "10px", color: "#fff" }}>
                <h3 className="text-white font-bold text-[24px]">UX Design Course</h3>
                <p className="text-white text-lg font-semibold">Instructor: John Doe</p>
              </div>
              <Button
              className="py-6 px-12"
            type="primary"
            style={{
              marginTop: "16px",
              backgroundColor: "#fff",
              color: "#000000",
            fontWeight: "bold",
              display: "flex",
            
            }}
           
          >
            Continue <ArrowUp className="rotate-90"/>
          </Button>
            </div>
          </div>

          
        </Card>
      </div>





        <div className="flex item-center justify-between pt-8">
            <h1 className="text-[20px] text-[#101828] font-bold mb-6">Explore more</h1>
            <h3 className="text-[14px] text-medium font-semibold  flex item-center underline cursor-pointer">Browse All <MdArrowForwardIos className="mt-1" /> </h3>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-1  xl:grid-cols-3 lg:grid-cols-2 gap-4 py-6">
        {coursemenu.map((item) => (
          <CourseCard
            key={item.id}
            courseimage={item.imageLink}
            courseTitle={item.courseTitle}
            instructor={item.instructor}
            rating={item.rating}
            price={item.price}
            reviews={item.reviews}
            duration={item.duration}
            students={item.students}
          />
        ))}
      </div>
    </div>
  );
};

export default Mycourses;
