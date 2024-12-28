"use client";
import { useState, useEffect } from "react";
import { Input, Button, Dropdown, Menu, Drawer, Modal, Select, Collapse, Checkbox } from "antd";

const { Panel } = Collapse;
import {
  ShoppingCartOutlined,
  MenuOutlined,
  SearchOutlined,
  DownOutlined,
  GlobalOutlined
} from "@ant-design/icons";
import logo from "/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Option } from "antd/es/mentions";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [language, setLanguage] = useState("en"); // Default to 'en'
  const [isModalVisible, setIsModalVisible] = useState(false);
  const t = useTranslations();
  const cookieMiya = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const savedLang = cookieMiya.get("NEXT_LOCALE") || "en";
    setLanguage(savedLang);
  }, []);

  const handleChange = (lang) => {
    if (lang && lang !== language) {
      setLanguage(lang);
      cookieMiya.set("NEXT_LOCALE", lang, { path: "/" });
      router.refresh(); // Refresh the data and re-render the page content
      setIsModalVisible(false); // Close the modal after selection
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const [selectedCategories, setSelectedCategories] = useState([]);

  const onCategoryChange = (checkedValues) => {
    setSelectedCategories(checkedValues);
  };


  const categoryMenu = (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
      <p className="text-sm text-gray-500">
        Helps you to find what actually you're looking for
      </p>
      <Collapse
        defaultActiveKey={["1", "2", "3"]}
        ghost
        expandIconPosition="end"
        className="mt-4"
      >
        {/* Category - Tutor */}
        <Panel header="Tutor" key="1" className="text-gray-800 font-medium bg-white">
          <Checkbox.Group onChange={onCategoryChange}>
            <div className="flex flex-col gap-2">
              <Checkbox value="Tutor">Tutor</Checkbox>
            </div>
          </Checkbox.Group>
        </Panel>

        {/* Category - Online Programs */}
        <Panel
          header="Online Programs"
          key="2"
          className="text-gray-800 font-medium bg-white"
        >
          <Collapse defaultActiveKey={["2-1"]} ghost>
            <Panel header="Data Science" key="2-1">
              <Checkbox.Group onChange={onCategoryChange}>
                <div className="flex flex-col gap-2">
                  <Checkbox value="Introduction to Data Science">
                    Introduction to Data Science
                  </Checkbox>
                  <Checkbox value="Python for Data Science">
                    Python for Data Science and Machine Learning Bootcamp
                  </Checkbox>
                  <Checkbox value="Data Science Specialization">
                    Data Science Specialization
                  </Checkbox>
                  <Checkbox value="Data Science Fundamentals">
                    Data Science Fundamentals with Python and SQL
                  </Checkbox>
                  <Checkbox value="Machine Learning">Machine Learning</Checkbox>
                  <Checkbox value="Applied Data Science">
                    Applied Data Science with Python Specialization
                  </Checkbox>
                  <Checkbox value="SQL for Data Science">
                    SQL for Data Science
                  </Checkbox>
                  <Checkbox value="AI Literacy">AI Literacy</Checkbox>
                </div>
              </Checkbox.Group>
            </Panel>
          </Collapse>
        </Panel>

        {/* Category - Difficulty Level */}
        <Panel
          header="Difficulties Level"
          key="3"
          className="text-gray-800 font-medium"
        >
          <Checkbox.Group onChange={onCategoryChange}>
            <div className="flex flex-col gap-2">
              <Checkbox value="Beginner">Beginner</Checkbox>
              <Checkbox value="Intermediate">Intermediate</Checkbox>
              <Checkbox value="Advanced">Advanced</Checkbox>
            </div>
          </Checkbox.Group>
        </Panel>
      </Collapse>
    </div>
  );
  const TutorMewnu = (
    <Menu className="max-w-[300px] w-full   space-y-2">
     <Menu.Item key="1">
     <Link href={'/tutorService/inpersonTutor'}>
        <div className="flex  space-x-1">
          <div className="pt-2">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 18.5C1 17.837 1.26339 17.2011 1.73223 16.7322C2.20107 16.2634 2.83696 16 3.5 16H17M1 18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H17V1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5V18.5Z" stroke="#14698A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>
          <div>
            <strong className="text-lg font-semibold text-[#101828]">In-person</strong>
            <p className="text-[#475467] text-sm">One-on-one personalized in-person tutoring</p>
          </div>
        </div>
     </Link>
      </Menu.Item>


      <Menu.Item key="2">
<Link href={'/tutorService/onlineTutor'}>
        <div className="flex  space-x-2">
          <div className="pt-2">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L1 13H10L9 21L19 9H10L11 1Z" stroke="#14698A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


          </div>
          <div>
            <strong className="text-lg font-semibold text-[#101828]">Online</strong>
            <p className="text-[#475467] text-sm">Personalized online tutoring, anytime, anywhere.</p>
          </div>
        </div>
</Link>
      </Menu.Item>

    </Menu>
  );

  return (
    <nav className="w-full p-4 bg-white mx-auto flex justify-between items-center">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Middle: Search bar with category button (Hidden on small screens) */}
      <div className="hidden w-full max-w-lg lg:flex items-center space-x-2 px-2">
        <Input
          placeholder="Looking for..."
          className="w-full text-[#667085] text-[16px]"
          prefix={<SearchOutlined size={15} className="text-[#667085]" />}
          suffix={
            <div>
              <div className="border-l-2 text-sm text-[#1D2939] font-normal border-[#D0D5DD]">
                <Dropdown
                  className="border-none"
                  overlay={categoryMenu}
                  trigger={["hover"]}
                >
                  <Button>Category <DownOutlined /></Button>
                </Dropdown>
              </div>
            </div>
          }
        />
      </div>

      {/* Right Side: Links (Hidden on small screens) */}
      <div className="">
        <ul className="hidden lg:flex items-center space-x-6">
          <li> <Link href="/onlinePrograms" className="text-sm pl-2">
            Online Programs
          </Link></li>
          <li>     <Dropdown
            className="border-none"
            overlay={TutorMewnu}
            trigger={["hover"]}
          >
            <Button>Tutor Service <DownOutlined /></Button>
          </Dropdown></li>
          <li>  <Link href="/becomeInstructor" className="text-sm pl-2">
            Become a Tutor
          </Link></li>
          <li> <Link href={"/auth/login"} className="text-[16px] font-semibold text-[#475467]">
            LogIn
          </Link></li>
          <li><Link href={"/auth/signup"}>
            <Button className="text-[#FFFFFF] font-semibold text-[16px] p-5 bg-primary" style={{ backgroundColor: "#14698A" }} type="primary">

              Sign Up
            </Button>
          </Link></li>
          <li></li>
        </ul>


        {/* <Button onClick={showModal} size="large">
          <GlobalOutlined />
        </Button> */}
      </div>

      {/* Mobile Menu Button (Visible on small screens) */}
      <div className="lg:hidden">
        <MenuOutlined className="text-2xl" onClick={showDrawer} />
      </div>

      {/* Modal for language selection */}
      <Modal

        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <h2 className="text-lg font-semibold mb-4" >{t("Choose Your Preferred Language")}</h2>
        <p className="mb-4 text-sm text-gray-500">
          {t("Select a language from the dropdown to change the language of the website.")}
        </p>
        <Select
          className="h-[44px] "
          placeholder={t("Select Language")}
          value={language}
          style={{ width: "100%", marginBottom: "1rem" }}
          onChange={handleChange}
        >
          <Select.Option className=" mb-2" value="en">{t("English")}</Select.Option>
          <Select.Option value="gr">{t("Greek")}</Select.Option>
          {/* Add other languages as needed */}
        </Select>
        <p className=" text-sm text-gray-500">
          {t("Note: Changing the language will refresh the page to apply your selection.")}
        </p>
        <p className="mb-4 text-sm text-gray-500">
          {t("If you encounter any issues, please try reloading the page manually.")}
        </p>
      </Modal>

      {/* Drawer for mobile menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        <Input.Search placeholder="Search course" className="mb-4" />
        <Dropdown overlay={categoryMenu} trigger={["click"]}>
          <Button className="mb-4">Category</Button>
        </Dropdown>
        <div className="flex flex-col space-y-4">
          <Link href="/becomeInstructor" className="text-sm">
            BecomeInstructor
          </Link>
          <Link className="cursor-pointer" href={"/shoppingcart"}>
            <ShoppingCartOutlined className="text-2xl" />
          </Link>
          <Link href={"/auth/login"} className="text-[16px] font-semibold text-[#475467]">
            LogIn
          </Link>
          <Link href={"/auth/signup"}>
            <Button className="text-[#FFFFFF] font-semibold text-[16px] p-5" type="primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
