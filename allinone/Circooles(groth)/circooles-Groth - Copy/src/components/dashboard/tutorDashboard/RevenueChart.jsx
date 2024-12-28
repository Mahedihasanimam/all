'use client'
import { useState } from "react";
import { Rate, Progress } from "antd";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SelectBox from "@/components/share/dashboard/SelectBox";
import Title from "antd/es/skeleton/Title";


const data = [
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

const ratingData = [
  { name: "Jan", amt: 18000 },
  { name: "Feb", amt: 14000 },
  { name: "Mar", amt: 22000 },
  { name: "Apr", amt: 9000 },
  { name: "May", amt: 8000 },
  { name: "Jun", amt: 16000 },
  { name: "Jul", amt: 9000 },
  { name: "Aug", amt: 14000 },
  { name: "Sep", amt: 8500 },
  { name: "Oct", amt: 13000 },
  { name: "Nov", amt: 7500 },
  { name: "Dec", amt: 6000 },
];

const RevenueChart = () => {
  const [selectedValue, setSelectedValue] = useState();

  const formatYAxis = (tickItem) => {
    return `${tickItem / 1000}k`;
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    console.log("Selected", value);
  };

  const selectOptions = [
    { value: "1", label: "this month" },
    { value: "3", label: "this Year" },
  ];

  const courseratingSelectOptions = [
    { value: "1", label: "this month" },
    { value: "3", label: "this Year" },
  ];

  return (
    <div className="bg-[#FFFFFF] rounded-2xl rounded-t-none p-2 pr-14">
      <div className="flex justify-between px-4 py-2 border-b-2 border-[#E9EAF0]">
        <div>
          <h1 className="text-[#1D2026] text-lg font-medium">Earnings</h1>
        </div>
        <div>
        <Title>This month</Title>
        <SelectBox
          options={selectOptions}
          placeholder="Revenue"
          onChange={handleSelectChange}
          style={{ width: 100 }}
        />
        </div>
      </div>

      <br />
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

      <div className="flex justify-between px-4 pt-12 pb-6 border-b-2 border-[#E9EAF0]">
        <Title>Overall Course Rating</Title>
        <SelectBox
          options={courseratingSelectOptions}
          placeholder="This week"
          onChange={handleSelectChange}
          style={{ width: 100 }}
        />
      </div>

      <br />

      <div className="flex items-center justify-center h-full p-6 gap-6 border-b-2 border-[#E9EAF0]">
        <div className="bg-[#FFF2E5] p-6 rounded-md min-w-[180px] min-h-[180px] text-center py-2 pt-8">
          <h1 className="text-[40px] font-semibold text-[#1D2026]">4.6</h1>
          <Rate
            allowHalf
            style={{ fontSize: 20, color: "#FDB022" }}
            defaultValue={4.6}
          />
          <p className="text-[14px] text-[#1D2026] font-medium pt-1">
            Overall Rating
          </p>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={ratingData}>
            <defs>
              <linearGradient id="colorAmt">
                <stop offset="5%" stopColor="#FFF2E5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFF2E5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              isAnimationActive={false}
              strokeWidth={3}
              stroke="#FDB022"
              type="monotone"
              dataKey="amt"
              fill="#FFF2E5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4 py-8">
        {/* Star ratings */}
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="px-6 flex items-start justify-start gap-6">
            <div className="flex items-center justify-center gap-2">
              <Rate
                allowHalf
                style={{ fontSize: 20, color: "#FDB022" }}
                defaultValue={star}
                className="flex-shrink-0"
              />
              <span className="text-[16px] font-medium text-[#4E5566] px-4 flex-shrink-0">
                {star} Star
              </span>
            </div>
            <Progress
              className="max-w-[330px]"
              type="line"
              strokeColor="#FDB022"
              strokeLinecap="butt"
              strokeWidth={10}
              percent={star * 10} // Example percentages
              status="active"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;
