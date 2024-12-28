import { Breadcrumb } from 'antd';
import React from 'react';
import ArtAndDesign from '../artAndDesign/page';
import ProgramCard from '@/components/ui/ProgramCard';
import MyProgramCard from '@/components/ui/MyProgramCard';

const page = () => {
    const programData = [
        {
            id: 1,
            instructor: "John Michael",
            rating: 4.7,
            reviews: 3242,
            courseTitle: "Product Management Master Programs",
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
            courseTitle: "Product Management Master Programs",
            duration: "40 Hours",
            students: 176,
            price: "€ 29.00",
            enrollLink: "ENROLL NOW",
            imageLink: "https://i.ibb.co.com/17pL5Qj/caourse1.png",
            category: `All courses`,
        },
        
    ];
    return (
        <div className='container mx-auto '>
            <div className="flex items-center justify-center py-8">
                <Breadcrumb
                    items={[
                        {
                            title: 'Home',
                        },

                        {
                            title: 'Online programs',
                        },
                    ]}
                />
            </div>
               {/* TO DO MY PROGRAMS --------------------------------------- */}
               <div className='border p-8 rounded-[24px] '>
            <h1 className=" text-[24px] font-normal italic my-4 text-[#344054]">My Programs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4 my-8">
                    {programData.map((item) => (
                        <MyProgramCard
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
            </div>


            {/* ART AND DESIGN -----------> */}
            <ArtAndDesign/>
        </div>
    );
};

export default page;