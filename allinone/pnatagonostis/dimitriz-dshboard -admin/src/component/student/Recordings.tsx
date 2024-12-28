import { Avatar, Button, Collapse } from "antd";
const { Panel } = Collapse;

const panels = [
  { id: "01", title: "Getting started", time: "02:30 min", isVideo: true },
  { id: "02", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
  { id: "03", title: "Practice Project", fileSize: "5.3 MB", isVideo: false },
  { id: "04", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
  { id: "05", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
  { id: "06", title: "Basic Fundamental", time: "10:30 min", isVideo: true },
];
import React from "react";
import {
  ClockCircleOutlined,
  PlayCircleOutlined,
  FolderOutlined,
  FileOutlined,
} from "@ant-design/icons";

import coursevideo from "../../../src/assets/video/7647629-hd_1920_1080_30fps.mp4";
import imageone from "../../assets/Images/dashboard/Avatar.png";
import { DownloadCloud, File } from "lucide-react";
import { FcDocument } from "react-icons/fc";

const Recordings: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <h1 className="text-[24px] font-bold ">UX Design Course</h1>
      <div className="xl:flex justify-between gap-6 item-center justify-between mb-4 container mx-auto">
        {/* left content ---------- */}
        <div className=" w-full">
          <video
            className="w-full mt-24 rounded-2xl"
            src={coursevideo}
            controls
          ></video>
          <h1 className="text-[24px] font-bold py-4 ">Getting started</h1>

          {/* avater  */}
          <div>
            <div className="lg:flex flex-col justify-between space-x-2">

            <div>
                    <p className="text-[#263238] text-[14px] font-normal flex items-center gap-2">
                      Last updated :{" "}
                      <span className="text-[#1D2939] block text-[14px] font-semibold">
                        Oct 26, 2024
                      </span>
                    </p>
                  </div>
                  
              {/* <div className="xl:flex flex-col item-center gap-4">
                <Avatar.Group className="pt-2" maxCount={5}>
                 
                  <Avatar src={imageone} />
                  <Avatar src={imageone} />
                  <Avatar src={imageone} />
                  <Avatar src={imageone} />
                  <Avatar src={imageone} />
                  <Avatar src={imageone} />
                  <Avatar src={imageone} />
                  <Avatar src={imageone} />
                  <Avatar src={imageone} />
                  <Avatar src={imageone} />
                </Avatar.Group>

                <div className="flex item-center justify-between w-full gap-2">
                  <div className="">
                    <p className="text-[#1D2939] block text-lg font-semibold">
                      512
                    </p>

                    <p className="text-[#263238] text-[14px] font-normal">
                      Students watching
                    </p>
                  </div>

                
                </div>
              </div> */}
            </div>
          </div>

          <div className="border rounded-lg xl:flex md:flex flex-wrap item-center justify-between gap-4 my-4">
            <a
              className="bg-[#F2F4F7] px-6 py-2 text-[14px] text-[#1D2939] font-semibold rounded-md flex itemcenter gap-2"
              href="#decription"
            >
              <button> Decription</button>
            </a>
            <a
              className=" px-6 py-2 text-[14px] text-[#1D2939] font-semibold rounded-md flex itemcenter gap-2"
              href="#decription"
            >
              <button> Lectures Notes</button>
            </a>
            <a
              className=" px-6 py-2 text-[14px] text-[#1D2939] font-semibold rounded-md flex itemcenter gap-2"
              href="#decription"
            >
              <button>
                {" "}
                Attach File{" "}
                <span className="bg-[#A9EBF8] rounded-sm py-1 ml-2 px-3 text-[14px]   text-[#1D2939] font-semibold">
                  01
                </span>
              </button>
            </a>
          </div>
          {/* decription here */}
          <div>
            <h1 className="text-[24px] font-bold py-4 ">
              Lectures Description
            </h1>
            <p className="text-[14px] font-normal leading-8">
              We cover everything you need to build your first website. From
              creating your first page through to uploading your website to the
              internet. We’ll use the world’s most popular (and free) web design
              tool called Visual Studio Code. There are exercise files you can
              download and then work along with me. At the end of each video I
              have a downloadable version of where we are in the process so that
              you can compare your project with mine. This will enable you to
              see easily where you might have a problem. We will delve into all
              the good stuff such as how to create your very own mobile burger
              menu from scratch learning some basic JavaScript and jQuery. If
              that all sounds a little too fancy - don’t worry, this course is
              aimed at people new to web design and who have never coded before.
              We’ll start right at the beginning and work our way through step
              by step.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between space-x-2  py-5">
              <h1 className="text-[24px] font-bold py-4 ">Lecture Notes</h1>
              <button className="bg-[#D8F0FF] text-[14px] font-semibold rounded-md px-4 py-2 text-[#1253BB] flex itemcenter gap-2">
                {" "}
                <DownloadCloud /> Download Notes
              </button>
            </div>
            <p className="text-[14px] font-normal leading-8">
              In ut aliquet ante. Curabitur mollis tincidunt turpis, sed aliquam
              mauris finibus vel. Praesent eget mi in mi maximus egestas. Mauris
              eget ipsum in justo bibendum pellentesque. Sed id arcu in arcu
              ullamcorper eleifend condimentum quis diam. Phasellus tempus, urna
              ut auctor mattis, nisi nunc tincidunt lorem, eu egestas augue
              lectus sit amet sapien. Maecenas tristique aliquet massa, a
              venenatis augue tempor in. Aliquam turpis urna, imperdiet in lacus
              a, posuere suscipit augue.
            </p>
            <p className="text-[14px] font-normal leading-8">
              Nullam non quam a lectus finibus varius nec a orci. Aliquam
              efficitur sem cursus elit efficitur lacinia
            </p>
            <ul className="text-[14px] font-normal leading-8 list-disc	pl-4">
              <li className="">
                Morbi sit amet pretium tellus. Donec blandit fermentum
                tincidunt.
              </li>
              <li>
                Proin iaculis sem et imperdiet tristique. Nam varius ac nisl id
                sodales. Donec iaculis interdum mattis.
              </li>
              <li>Curabitur posuere ultricies diam in egestas.</li>
              <li>
                Donec id diam et lacus pharetra vestibulum a id est. Mauris
                vestibulum massa quis elit feugiat, dictum maximus ipsum
                pellentesque.
              </li>
              <li>
                Sed elementum, libero id lacinia aliquet, purus nibh consectetur
                mauris, eget interdum mi lacus vitae sem.
              </li>
            </ul>

            <p className="text-[14px] font-normal leading-8 pt-4">
              Donec congue aliquam lorem nec congue. Suspendisse eu risus
              mattis, interdum ante sed, fringilla urna. Praesent mattis dictum
              sapien a lacinia. Ut scelerisque magna aliquet, blandit arcu quis,
              consequat purus. Suspendisse eget scelerisque felis. Integer
              vulputate urna laoreet purus vehicula condimentum. Donec quis
              luctus quam. Curabitur quis molestie ante. Nam pharetra sagittis
              varius. Sed ullamcorper facilisis bibendum.
            </p>

            {/* atach file here---------------------- */}
            <div id="decription" className="py-10">
              <h1 className="text-[24px]  font-bold text-[#1D2026]">
                Attach Files <span className="font-normal">(01)</span>
              </h1>
              <div className="bg-[#F5F7FA] rounded-md mt-6 p-6 xl:flex lg:flex flex-wrap item-center justify-between max-w-lg">
                <div className="flex gap-2 items-center ">
                  <FileOutlined className="text-[#475467] text-[40px]" />
                  <div>
                    <p className="text-[16px] font-medium text-[#1D2026]">
                      Create account on webflow.pdf
                    </p>
                    <p className="text-[#6E7485]">12.6 MB</p>
                  </div>
                </div>
                <div>
                  <Button size="large" type="primary">
                    {" "}
                    Download File
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ritht content --------------- */}
        <div className="xl:max-w-2xl  w-full">
          {/* Course curriculum section here ------------- */}
          <div className="xl:max-w-2xl  w-full  my-12  lg:p-4 p-0">
            {/* lacture folder ----------------- */}
            <div className="flex items-center justify-between mb-4 pl-8 ">
              <div className="flex flex-wrap items-center justify-between lg:gap-6 md:gap-6 gap-1">
                <div className="lg:text-[16px] text-sm font-normal text-[#4E5566] flex items-center gap-3">
                  <FolderOutlined className="lg:text-2xl text-xl text-[#4E5566]" />{" "}
                  6 Sections
                </div>
                <div className="lg:text-[16px] text-sm font-normal text-[#4E5566] flex items-center gap-3">
                  <PlayCircleOutlined className="lg:text-2xl text-xl text-[#4E5566]" />{" "}
                  202 lectures
                </div>
                <div className="lg:text-[16px] text-sm font-normal text-[#4E5566] flex items-center gap-3">
                  <ClockCircleOutlined className="lg:text-2xl text-xl text-[#4E5566]" />{" "}
                  19h 37m
                </div>
              </div>
            </div>

            {/* course outline here----------------------------------------------------------- */}
            <div className=" mx-auto  rounded-md lg:p-4 md:p-4 p-0 border-none">
              <Collapse
                defaultActiveKey={["1"]}
                accordion
                expandIconPosition="right"
                className=" p-4 rounded-lg border-none"
              >
                {/* dropswon/panel one --------------- */}
                <Panel
                  header={
                    <div className="">
                      <div className="text-lg font-semibold text-[#475467]">
                        Introduction to Product Management
                      </div>
                      <div className="text-xs text-[#98A2B3] font-normal">
                        06 Lectures • 30 Minutes
                      </div>
                    </div>
                  }
                  key="1"
                  className="mb-2 bg-transparent "
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="space-y-3 cursor-pointer">
                    {/* Add space between items */}
                    {panels.map((panel) => (
                      <div
                        key={panel.id}
                        className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4" // Adjust margin, padding and shadow
                      >
                        <div className="flex items-center">
                          <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                            {panel.id}
                          </div>
                          <div>
                            <p className="font-semibold text-[#475467] text-[16px]">
                              {panel.title}
                            </p>
                            {panel.isVideo ? (
                              <p className="text-sm text-[#98A2B3]">
                                {panel.time}
                              </p>
                            ) : (
                              <p className="text-sm text-[#98A2B3]">
                                {panel.fileSize}
                              </p>
                            )}
                          </div>
                        </div>
                        <div>
                          {panel.isVideo ? (
                            <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                          ) : (
                            <FileOutlined className="text-[#14698A] text-2xl" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>

                {/* dropswon/panel tow --------------- */}
                <Panel
                  header={
                    <div className="">
                      <div className="text-lg font-semibold text-[#475467]">
                        Introduction to Product Management
                      </div>
                      <div className="text-xs text-[#98A2B3] font-normal">
                        06 Lectures • 30 Minutes
                      </div>
                    </div>
                  }
                  key="2"
                  className="mb-2 bg-transparent"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="space-y-3 cursor-pointer">
                    {/* Add space between items */}
                    {panels.map((panel) => (
                      <div
                        key={panel.id}
                        className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4" // Adjust margin, padding and shadow
                      >
                        <div className="flex items-center">
                          <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                            {panel.id}
                          </div>
                          <div>
                            <p className="font-semibold text-[#475467] text-[16px]">
                              {panel.title}
                            </p>
                            {panel.isVideo ? (
                              <p className="text-sm text-[#98A2B3]">
                                {panel.time}
                              </p>
                            ) : (
                              <p className="text-sm text-[#98A2B3]">
                                {panel.fileSize}
                              </p>
                            )}
                          </div>
                        </div>
                        <div>
                          {panel.isVideo ? (
                            <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                          ) : (
                            <FileOutlined className="text-[#14698A] text-2xl" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>
                {/* dropswon/panel three --------------- */}
                <Panel
                  header={
                    <div className="">
                      <div className="text-lg font-semibold text-[#475467]">
                        Introduction to Product Management
                      </div>
                      <div className="text-xs text-[#98A2B3] font-normal">
                        06 Lectures • 30 Minutes
                      </div>
                    </div>
                  }
                  key="3"
                  className="mb-2 bg-transparent"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="space-y-3 cursor-pointer">
                    {/* Add space between items */}
                    {panels.map((panel) => (
                      <div
                        key={panel.id}
                        className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4" // Adjust margin, padding and shadow
                      >
                        <div className="flex items-center">
                          <div className="bg-[#F2F4F7] text-[#475467] w-10 h-10 rounded-lg flex items-center justify-center mr-4 font-bold">
                            {panel.id}
                          </div>
                          <div>
                            <p className="font-semibold text-[#475467] text-[16px]">
                              {panel.title}
                            </p>
                            {panel.isVideo ? (
                              <p className="text-sm text-[#98A2B3]">
                                {panel.time}
                              </p>
                            ) : (
                              <p className="text-sm text-[#98A2B3]">
                                {panel.fileSize}
                              </p>
                            )}
                          </div>
                        </div>
                        <div>
                          {panel.isVideo ? (
                            <PlayCircleOutlined className="text-[#14698A] text-2xl" />
                          ) : (
                            <FileOutlined className="text-[#14698A] text-2xl" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recordings;
