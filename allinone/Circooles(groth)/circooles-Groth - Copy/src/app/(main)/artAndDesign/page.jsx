'use client'
import CourseCard from '@/components/ui/CourseCard';
import MyProgramCard from '@/components/ui/MyProgramCard';
import ProgramCard from '@/components/ui/ProgramCard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Pagination } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

const ArtAndDesign = () => {


    const course = [
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
            category: `All courses`,
        },
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
            category: `All courses`,
        },
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
            category: `All courses`,
        },
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
            category: `All courses`,
        },
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
            category: `All courses`,
        },
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
            category: `All courses`,
        },
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
            category: `All courses`,
        },
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
            category: `All courses`,
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
            category: `All courses`,
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
            category: `UI/UX Design`,
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
            category: `Programming`,
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
            category: `Artificial Intelligence`,
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
            category: `Business Management`,
        },
        {
            id: 7,
            instructor: "John Michael",
            rating: 4.7,
            reviews: 3242,
            courseTitle: "Product Marketing Essentials",
            duration: "42 Hours",
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
            duration: "48 Hours",
            students: 220,
            price: "€ 33.00",
            enrollLink: "ENROLL NOW",
            imageLink: "https://i.ibb.co.com/17pL5Qj/caourse1.png",
            category: `Sports`,
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
            category: `All courses`,
        },
    ];





    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(9);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    // Calculate paginated data
    const paginatedData = course.slice((currentPage - 1) * pageSize, currentPage * pageSize)

    return (
        <div className='container mx-auto mt-8'>





            {/* ART AND DESIGN -----------> */}
            <div>
                <div className="flex  items-center justify-between    ">
               <div>
               <h1 className=" text-[24px] font-normal italic my-4">Art and Design</h1>
               </div>

                    <div>
                        <Link className=" font-bold border-b-2 pb-0 border-[#1D2939] text-[#000000]" href={`/browseCourse/category/ArtandDesign`}>View all  <RightOutlined className="font-bold pl-1" /> </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
                    {paginatedData.map((item) => (
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
                            enrollLink={item.id}
                        />
                    ))}
                </div>

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

export default ArtAndDesign;