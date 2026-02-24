"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
} from "recharts";
import { Info, Calendar, Minus } from "lucide-react";

const data = [
  { name: "1", current: 0, previous: 0 },
  { name: "5", current: 0, previous: 0 },
  { name: "10", current: 0, previous: 0 },
  { name: "15", current: 220342123, previous: 200000000 },
  { name: "20", current: 0, previous: 0 },
  { name: "25", current: 0, previous: 0 },
  { name: "30", current: 0, previous: 0 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white px-6 py-4 rounded-[20px] shadow-[0_20px_40px_rgba(17,20,45,0.08)]">
        <p className="text-[20px] font-semibold text-[#11142D]">
          {payload[0].value.toLocaleString()}
        </p>
        <p className="text-[12px] text-[#9A9AB0] mt-1 font-medium">May</p>
      </div>
    );
  }
  return null;
};

export default function TotalVisitsCard() {
  const [activeTab, setActiveTab] = useState<"current" | "previous">(
    "current"
  );
  const [fade, setFade] = useState(true);

  // Smooth fade animation
  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 150);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="bg-white rounded-[28px] px-10 pt-8 pb-10 shadow-[0_30px_60px_rgba(17,20,45,0.05)]">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <h3 className="text-[18px] font-semibold text-[#11142D]">
            Total visits
          </h3>

          <div className="w-5 h-5 rounded-full border border-[#E9EAF3] flex items-center justify-center">
            <Info size={12} className="text-[#9A9AB0]" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-10">

          {/* Tabs */}
          <div className="relative flex items-center gap-8 text-[14px] font-medium">
            
            <button
    type="button"
    onClick={() => setActiveTab("current")}
    className={`relative bg-transparent border-0 outline-none shadow-none pb-[6px] transition-colors duration-200 ${
      activeTab === "current"
        ? "text-[#11142D]"
        : "text-[#9A9AB0]"
    }`}
  >
    Current
  </button>

           <button
    type="button"
    onClick={() => setActiveTab("previous")}
    className={`relative bg-transparent border-0 outline-none shadow-none pb-[6px] transition-colors duration-200 ${
      activeTab === "previous"
        ? "text-[#11142D]"
        : "text-[#9A9AB0]"
    }`}
  >
    Previous
  </button>

            {/* Sliding Underline */}
           
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-[14px] font-medium text-[#11142D] cursor-pointer select-none">
            <Calendar size={16} className="text-[#9A9AB0]" />
            <span>March 2020</span>
          </div>

          {/* Minimize */}
          <button className="">
            <Minus size={10} />
          </button>
        </div>
      </div>

      {/* CHART */}
      <div
        className={`h-[360px] transition-opacity duration-200 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6C5DD3" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#6C5DD3" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#F3F4F8" vertical={false} />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#B8B9C3", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 240000000]}
              ticks={[0, 60000000, 120000000, 180000000, 240000000]}
              tick={{ fill: "#B8B9C3", fontSize: 12 }}
              tickFormatter={(value) =>
                value === 0 ? "0K" : `${value / 1000000}M`
              }
            />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey={activeTab === "current" ? "previous" : "current"}
              stroke="#E4E6EF"
              strokeWidth={3}
              dot={false}
            />

            <Area
              type="monotone"
              dataKey={activeTab}
              fill="url(#areaGradient)"
              stroke="none"
            />

            <Line
              type="monotone"
              dataKey={activeTab}
              stroke="#6C5DD3"
              strokeWidth={4}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#6C5DD3",
                stroke: "#ffffff",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}