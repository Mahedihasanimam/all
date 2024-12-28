
import { BsStack } from 'react-icons/bs';
import React from 'react';
import { Tabs, Input, Select, Button, Menu } from 'antd';
import { MdDetails } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoStack } from 'react-icons/go';
import { IoClipboardOutline, IoPlayCircleOutline } from 'react-icons/io5';
import { PiMonitorLight } from "react-icons/pi";
import CourseDetails from '../component/dashHome/CourseDetails';
import CurriculumSection from '../component/dashHome/CurriculumSection';
import PublishCourse from '../component/dashHome/PublishCourse';
// import { GoStack, MdDetails, FaClipboardList, AiOutlineCheckCircle } from 'react-icons/all'; // Import icons

const { TabPane } = Tabs;
const { Option } = Select;
interface CreateNewCourseProps {}
const CreateNewCourse: React.FC<CreateNewCourseProps> = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Video</Menu.Item>
      <Menu.Item key="2">Attach File</Menu.Item>
      <Menu.Item key="3">Captions</Menu.Item>
      <Menu.Item key="4">Description</Menu.Item>
      <Menu.Item key="5">Lecture Notes</Menu.Item>
    </Menu>
  );
  return (
    <div>
        <div className="container mx-auto my-10">
      <Tabs
        defaultActiveKey="1"
        tabBarStyle={{ marginBottom: 32 }}
      >
        <TabPane
          tab={
            <span className="flex items-center gap-2 text-[#1D2939] font-semibold">
              <GoStack size={24} />
              Basic Information
            </span>
          }
          key="1"
        >
          <div>
            <h2 className="text-2xl  font-semibold mb-4 py-6 border-b-2 border-[#E5E7EB]">Basic Information</h2>
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="block font-medium mb-1 text-[#344054]">Title</label>
                <Input style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400 }} placeholder="Your course title"  />
              </div>
              
              {/* Subtitle */}
              <div>
                <label className="block font-medium mb-1 text-[#344054]">Subtitle</label>
                <Input style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400 }} placeholder="Your course subtitle"  />
              </div>
              
              {/* Pricing */}
              <div>
                <label className="block font-medium mb-1 text-[#344054]">Pricing</label>
                <Select  placeholder="Select..." style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400,backgroundColor: '#FFFF',borderRadius: '8px' }}>
                  <Option value="free">Free</Option>
                  <Option value="paid">Paid</Option>
                </Select>
              </div>
              
              {/* Platform Fees */}
              <div>
                <label className="block font-medium mb-1 text-[#344054]">Platform Fees</label>
                <Input style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',backgroundColor: '#FFFF',borderRadius: '8px',fontSize: '16px', fontWeight:400 }}   defaultValue="20%" disabled />
              </div>
              
              <div className='flex items-center justify-center gap-6'>
                {/* Course Category */}
              <div className='w-full'>
                <label className="block font-medium mb-1 text-[#344054]">Course Category</label>
                <Select placeholder="Select..." style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400,backgroundColor: '#FFFF',borderRadius: '8px' }}>
                  <Option value="development">Development</Option>
                  <Option value="design">Design</Option>
                </Select>
              </div>

              {/* Course Sub-category */}
              <div className='w-full'>
                <label className="block font-medium mb-1 text-[#344054]">Course Sub-category</label>
                <Select placeholder="Select..." style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400,backgroundColor: '#FFFF',borderRadius: '8px' }}>
                  <Option value="web-development">Web Development</Option>
                  <Option value="graphic-design">Graphic Design</Option>
                </Select>
              </div>
              </div>

              {/* Course Topic */}
              <div className="col-span-2">
                <label className="block font-medium mb-1 text-[#344054]">Course Topic</label>
                <Input style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400 }}  placeholder="What is primarily taught in your course?" />
              </div>


            <div className='grid grid-cols-4 gap-6'>

              {/* Select Language */}
              <div>
                <label className="block font-medium mb-1 text-[#344054]">Select Language</label>
                <Select placeholder="Select..." style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400,backgroundColor: '#FFFF',borderRadius: '8px' }}>
                  <Option value="english">English</Option>
                  <Option value="spanish">Spanish</Option>
                </Select>
              </div>

              {/* Subtitle Language */}
              <div>
                <label className="block font-medium mb-1 text-[#344054]">Subtitle Language (Optional)</label>
                <Select placeholder="Select..." style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400,backgroundColor: '#FFFF',borderRadius: '8px' }}>
                  <Option value="english">English</Option>
                  <Option value="spanish">Spanish</Option>
                </Select>
              </div>

              {/* Course Level */}
              <div>
                <label className="block font-medium mb-1 text-[#344054]">Course Level</label>
                <Select placeholder="Select..." style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400,backgroundColor: '#FFFF',borderRadius: '8px' }}>
                  <Option value="beginner">Beginner</Option>
                  <Option value="intermediate">Intermediate</Option>
                </Select>
              </div>

              {/* Duration */}
              <div>
                <label className="block font-medium mb-1 text-[#344054]">Duration</label>
                <Select placeholder="Select..." style={{ width: '100%',height: '44px',borderColor: '#D0D5DD',color:'#667085',fontSize: '16px', fontWeight:400,backgroundColor: '#FFFF',borderRadius: '8px' }}>
                  <Option value="1">1 Hour</Option>
                  <Option value="2">2 Hours</Option>
                </Select>
              </div>
            </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button >Cancel</Button>
              <Button style={{height: '44px',fontSize: '16px', fontWeight:400}} type="primary">Save & Next</Button>
            </div>
          </div>
        </TabPane>

        {/* Additional TabPanes */}
        <TabPane
          tab={
            <span className="flex items-center gap-2 text-[#1D2939] font-semibold">
              <IoClipboardOutline size={24} />
              Details
            </span>
          }
          key="2"
        >
          <div> 
            <CourseDetails/>
          </div>
        </TabPane>

        <TabPane
          tab={
            <span className="flex items-center gap-2 text-[#1D2939] font-semibold">
              <PiMonitorLight  size={24} />
              Curriculum
            </span>
          }
          key="3"
        >
          <div> {/* Add content for the Curriculum tab here */}
            <CurriculumSection/>  
             </div>
        </TabPane>
       
        <TabPane
          tab={
            <span className="flex items-center gap-2 text-[#1D2939] font-semibold">
              <IoPlayCircleOutline size={24} />
              Publish Course
            </span>
          }
          key="4"
        >
          <div> {/* Add content for the Publish Course tab here */}
            <PublishCourse/>
             </div>
        </TabPane>
      </Tabs>
    </div>
    </div>
  );
};

export default CreateNewCourse;

