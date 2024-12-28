import React, { useState } from "react";
import SelectBox from "../share/SelectBox";
import { HiMiniUsers } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SiPaypal } from "react-icons/si";
import { FcComboChart } from "react-icons/fc";
import { FiCreditCard } from "react-icons/fi";
import { LuCrown } from "react-icons/lu";
import { GrDocumentVerified, GrLineChart } from "react-icons/gr";
import { User2 } from "lucide-react";
import { FaRegUserCircle } from "react-icons/fa";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Title from "../share/Title";
import TransactionTable from "./TransactionsTable";
import TransactionHistory from "../admin/TransactionHistory";
// Define the type for each data point
interface DataPoint {
  name: string;
  amt: number;
}
const data: DataPoint[] = [
  { name: "Jan", amt: 12000 },
  { name: "Feb", amt: 12000 },
  { name: "Mar", amt: 7000 }, 
  { name: "Apr", amt: 15000 },
  { name: "May", amt: 8000 }, 
  { name: "Jun", amt: 16000 },
  { name: "Jul", amt: 9000 }, 
  { name: "Aug", amt: 14000 },
  { name: "Sep", amt: 8500 }, 
  { name: "Oct", amt: 13000 },
  { name: "Nov", amt: 7500 }, 
  { name: "Dec", amt: 6000 }, 
];

// Define a type for the API response
interface StatusAttributes {
  totalEarnings: number;
  allUsers: number;
  paidUsers: number;
}

interface StatusData {
  data: {
    attributes: StatusAttributes;
  };
}

// Define a type for the API response
interface StatusAttributes {
  totalEarnings: number;
  allUsers: number;
  paidUsers: number;
}

interface StatusData {
  data: {
    attributes: StatusAttributes;
  };
}

const cardData = [
  {
    id: 1,
    icon: <FaRegUserCircle style={{ fontSize: "30px", color: "#D92D20" }} />,
    title: "€27,350.00",
    description: "Total Revenue",
  },
  {
    id: 2,
    icon: <FiCreditCard style={{ fontSize: "30px", color: "#475467" }} />,
    title: "€33,350.00",
    description: "Current Balance",
  },
  {
    id: 3,
    icon: <GrLineChart style={{ fontSize: "30px", color: "#039855" }} />,
    title: "486",
    description: "Total Withdrawals",
  },
];

const TransactionsStatus: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const formatYAxis = (tickItem) => `${tickItem / 1000}k`;
  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex);
  };
  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log("Selected", value);
  };

  const selectOptions = [
    { value: "1", label: "week" },
    { value: "2", label: "Month" },
    { value: "3", label: "Year" },
  ];
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-xl">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-xl font-bold text-[#5D5D5D]">Overview</h1>
          <p className="text-[#5D5D5D]">Activities summary at a glance</p>
        </div>
        <div className="pr-8">
          <SelectBox
            options={selectOptions}
            placeholder="Week"
            onChange={handleSelectChange}
            style={{ width: 100 }}
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4  mt-[12px]">
        {cardData.map((card, index) => {
          const bgColors = ["bg-[#FEF3F2]", "bg-[#F9FAFB]", "bg-[#ECFDF3]"]; // Define your background colors here
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



      <div className="flex justify-between px-4 py-2 border-b-2 border-[#E9EAF0]">
        <Title className="">Revenue</Title>
        <SelectBox
          options={selectOptions}
          placeholder="Revenue"
          onChange={handleSelectChange}
          style={{ width: 100 }}
        />
      </div>
      <ResponsiveContainer width="100%" height={480}>
        <AreaChart data={data} syncId="anyId">
          <defs>
            <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#564FFD" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#564FFD00" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis axisLine={false} dataKey="name" />
          <YAxis
            axisLine={false}
            tickFormatter={formatYAxis}
            ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000]}
            interval={0}
          />
          <Tooltip />
          <Area
            isAnimationActive={false}
            strokeWidth={3}
            stroke="#564FFD"
            type="monotone"
            dataKey="amt"
            fill="url(#colorAmt)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <TransactionHistory/>
    </div>
  );
};

export default TransactionsStatus;