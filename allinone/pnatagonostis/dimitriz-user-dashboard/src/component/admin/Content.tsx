import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import React from 'react';
import TotalInstructor from './TotalInstructor';

const { Option } = Select; // Destructuring Option from Select

const Content: React.FC = () => {
    return (
        <div>
            {/* Dropdowns for Sort By, Category, and Ratings */}
            <div className="flex justify-between space-x-4">
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
                        className="text-[#D0D5DD] border-[1px] border-[#D0D5DD] rounded-[4px] w-[300px] h-[40px] bg-white"
                        style={{ borderColor: "#D0D5DD" }}
                    >
                        <Option value="newest">Newest</Option>
                        <Option value="oldest">Oldest</Option>
                        <Option value="popular">Most Popular</Option>
                    </Select>
                </div>

                <div>
                    {/* Category Dropdown */}
                    <p className="text-[16px] font-medium text-[#344054] pb-2">Category</p>
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
            <TotalInstructor/>
        </div>
       
    );
};

export default Content;
