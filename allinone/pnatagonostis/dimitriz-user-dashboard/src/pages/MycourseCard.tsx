import React from "react";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CourseCard from "../component/mycourse/CourseCard";

const { Option } = Select;

const MycourseCard: React.FC = () => {
  const coursemenu = [
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "40 Hours",
      students: 176,
      price:  29.00,
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
      price:  35.00,
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
      price:  27.00,
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
      price:  40.00,
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
      price:  50.00,
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
      price:  25.00,
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: "Business Management",
    },
    {
      id: 7,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Marketing Essentials",
      duration: "42 Hours",
      students: 190,
      price:  30.00,
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/xLN7bSQ/category2.png",
      category: "3D",
    },
    {
      id: 8,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Analytics for Beginners",
      duration: "48 Hours",
      students: 220,
      price:  33.00,
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
      price:  37.00,
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: "All courses",
    },
  ];

  //To Do: Implement the search functionality
  return (
    <div className="p-4">
      {/* Search Input */}

      {/* Dropdowns for Sort By, Category, and Ratings */}
      <div className="flex flex-wrap justify-between space-x-4">
        <div className="mb-4">
        <p className='text-[16px] font-medium text-[#344054] pb-2'>Search</p>
          <Input
            className="text-[#D0D5DD] border-[1px] border-[#D0D5DD] rounded-[4px] w-[300px] h-[40px] bg-white"
            placeholder="Search your courses..."
            prefix={<SearchOutlined style={{ color: "#D0D5DD" }} />} // Adding search icon as prefix
          />
        </div>
        <div>
        <p className='text-[16px] font-medium text-[#344054] pb-2'>Sort by</p>
          {/* Sort By Dropdown */}
          <Select
            defaultValue="Sort by"
            className="text-[#D0D5DD] border-[1px] border-[#D0D5DD] rounded-[4px] w-[300px] h-[40px] bg-white "
            style={{ borderColor: "#D0D5DD" }}
          >
            <Option value="newest">Newest</Option>
            <Option value="oldest">Oldest</Option>
            <Option value="popular">Most Popular</Option>
          </Select>
        </div>

        <div>
          {/* Category Dropdown */}
          <p className="text-[16px] font-medium text-[#344054] pb-2">
            Category
          </p>
          <Select
            defaultValue="Category"
            className="text-[#D0D5DD] border-[1px] border-[#D0D5DD] rounded-[4px] w-[300px] h-[40px] bg-white"
            style={{ borderColor: "#D0D5DD" }}
          >
            <Option value="development">Development</Option>
            <Option value="design">Design</Option>
            <Option value="business">Business</Option>
          </Select>
        </div>

        <div>
          {/* Ratings Dropdown */}
          <p className="text-[16px] font-medium text-[#344054] pb-2">Ratings</p>
          <Select
            defaultValue="Ratings"
            className="text-[#D0D5DD] border-[1px] border-[#D0D5DD] rounded-[4px] w-[300px] h-[40px] bg-white"
            style={{ borderColor: "#D0D5DD" }}
          >
            <Option value="5">5 Stars</Option>
            <Option value="4">4 Stars</Option>
            <Option value="3">3 Stars</Option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-4 py-6">
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

export default MycourseCard;
