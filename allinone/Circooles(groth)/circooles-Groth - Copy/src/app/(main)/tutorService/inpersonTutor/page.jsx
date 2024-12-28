'use client'

import { Breadcrumb, Button, Pagination, Tabs } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import tutor from '/public/images/tutor.png'
import TopratedTutorCard from '@/components/ui/TopratedTutorCard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
const page = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(9);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);


  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const times = ['3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM','6:00 PM'];
  const handlePageChange = (page) => {
      setCurrentPage(page);
  };


 

  //   FAKE JSON DATA FOR DEMO PURPOSES ONLY
  const course = [
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "Physics Expert",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `All courses`,
    },
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "Physics Expert",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `All courses`,
    },
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "Physics Expert",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `All courses`,
    },
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "Physics Expert",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `All courses`,
    },
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "Physics Expert",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `All courses`,
    },
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "Physics Expert",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `All courses`,
    },
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "Physics Expert",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `All courses`,
    },
    {
      id: 1,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Management Basic - Course",
      duration: "Physics Expert",
      students: 176,
      price: "€ 29.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `All courses`,
    },
    {
      id: 2,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Advanced Product Strategy - Course",
      duration: "Physics Expert",
      students: 150,
      price: "€ 35.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/xLN7bSQ/category2.png",
      category: `Graphic Design`,
    },
    {
      id: 3,
      instructor: "John Michael",
      rating: 4.6,
      reviews: 2987,
      courseTitle: "Product Roadmaps for Success",
      duration: "Physics Expert",
      students: 200,
      price: "€ 27.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: `UI/UX Design`,
    },
    {
      id: 4,
      instructor: "John Michael",
      rating: 4.8,
      reviews: 3500,
      courseTitle: "Mastering Agile Product Management",
      duration: "Physics Expert",
      students: 250,
      price: "€ 40.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/xLN7bSQ/category2.png",
      category: `Programming`,
    },
    {
      id: 5,
      instructor: "John Michael",
      rating: 4.9,
      reviews: 3800,
      courseTitle: "Product Leadership for Managers",
      duration: "Physics Expert",
      students: 300,
      price: "€ 50.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `Artificial Intelligence`,
    },
    {
      id: 6,
      instructor: "John Michael",
      rating: 4.5,
      reviews: 2800,
      courseTitle: "Foundations of Product Development",
      duration: "Physics Expert",
      students: 180,
      price: "€ 25.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: `Business Management`,
    },
    {
      id: 7,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Marketing Essentials",
      duration: "Physics Expert",
      students: 190,
      price: "€ 30.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/xLN7bSQ/category2.png",
      category: `3D`,
    },
    {
      id: 8,
      instructor: "John Michael",
      rating: 4.7,
      reviews: 3242,
      courseTitle: "Product Analytics for Beginners",
      duration: "Physics Expert",
      students: 220,
      price: "€ 33.00",
      enrollLink: "ENROLL NOW",
      imageLink: tutor,
      category: `Sports`,
    },
    {
      id: 9,
      instructor: "John Michael",
      rating: 4.6,
      reviews: 3100,
      courseTitle: "Building Digital Products",
      duration: "Physics Expert",
      students: 210,
      price: "€ 37.00",
      enrollLink: "ENROLL NOW",
      imageLink: "https://i.ibb.co.com/vPfYHr7/category1.png",
      category: `All courses`,
    },
  ];


  //   FILTER COURSES BY CATEGORY
  const categories = [...new Set(course.map((item) => item.category))];
  const filterCoursesByCategory = (category) => {
    return course.filter((item) => item.category === category);
  };

  // Handle tab change OR ACTIVE KEY
  const handleTabChange = (key) => {
    setActiveKey(key);
    setCurrentPage(1); // Reset to the first page when the category changes
  };
 // Calculate paginated data
 const getPaginatedData = (category) => {
  const filteredData = filterCoursesByCategory(category);
  return filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
};

 const t = useTranslations()
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        <Breadcrumb
          items={[
            {
              title: 'Home',
            },

            {
              title: 'Tutor sevice',
            },
            {
              title: 'In-person',
            },
          ]}
        />
      </div>

      <div className="container mx-auto py-16 px-4">

          <div className='flex items-end space-x-1'>
            <h1 className='text-2xl font-bold'>Available </h1>
            <strong className='font-normal text-[#667085] text-[16px] italic'>(1,200 tutors)</strong>
          </div>
        {/* Tabs for categories */}
        <Tabs
          defaultActiveKey="1"
          activeKey={activeKey}
          onChange={handleTabChange}
          tabBarStyle={{
            borderBottom: "none",
          }}
        >
          {categories.map((category, index) => (
            <Tabs.TabPane
              tab={
                <button
                  className={`category-button ${activeKey === String(index + 1) ? "active-tab" : ""
                    }`}
                >
                  {category}
                </button>
              }
              className="pt-8"
              key={index + 1}
            >
              {/* Course cards for each category */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4">
                {getPaginatedData(category).map((item) => (
                  <TopratedTutorCard
                    key={item.id}
                    courseimage={item.imageLink}
                    courseTitle={item.courseTitle}
                    instructor={item.instructor}
                    rating={item.rating}
                    price={item.price}
                    reviews={item.reviews}
                    duration={item.duration}
                    students={item.students}
                    enrollLink={item.id}
                  />
                ))}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>

        {/* Custom styles */}
        <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
                    <div className="flex justify-center items-center gap-4 w-full">
                        <div className="text-center text-white mt-2">
                            Page {currentPage} of {Math.ceil(course.length / pageSize)}
                        </div>
                        <Pagination

                            current={currentPage}
                            total={course.length}
                            pageSize={pageSize}
                            onChange={handlePageChange}
                            showSizeChanger={false}
                            className="text-center"
                            itemRender={(page, type) => {
                                if (type === 'prev') {
                                    return (
                                        <Button className="custom-icon">
                                            <LeftOutlined style={{ color: '#1890ff', fontSize: '16px' }} /> <span>Previous</span>
                                        </Button>
                                    );
                                }
                                if (type === 'next') {
                                    return (
                                        <Button className="custom-icon">
                                            <span>Next</span> <RightOutlined style={{ color: '#1890ff', fontSize: '16px' }} />
                                        </Button>
                                    );
                                }
                                return <button className="page-number">{page}</button>;
                            }}
                        />
                    </div>

                </div>
      </div>

    </div>
  );
};

export default page;