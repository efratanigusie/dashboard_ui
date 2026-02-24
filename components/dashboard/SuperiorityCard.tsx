import { Info } from "lucide-react";

export default function SuperiorityCard() {
  return (
    <div className="w-[440px] bg-white rounded-[24px] p-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
      
      {/* Header */}
      <div className="flex items-center gap-[8px] mb-[22px]">
        <h3 className="text-[16px] font-semibold text-[#11142D]">
          Superiority
        </h3>
        <Info size={16} className="text-[#9CA3AF]" />
      </div>

      {/* Dashboard Preview */}
      <div className="relative bg-[#F4F6FA] rounded-[20px] p-[14px]">

        {/* Floating Dashboard Panel */}
        <div className="bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">

          {/* Top Blue Header */}
          <div className="h-[48px] bg-gradient-to-r from-[#5B4CF0] to-[#6C63FF]" />

          {/* Body Layout */}
          <div className="flex p-[16px] gap-[16px]">

            {/* Left Sidebar */}
            <div className="w-[48px] bg-[#F4F6FA] rounded-[12px]" />

            {/* Middle Content */}
            <div className="flex-1 space-y-[12px]">
              <div className="h-[10px] bg-[#E5E7EB] rounded-full w-[60%]" />
              <div className="h-[10px] bg-[#E5E7EB] rounded-full w-[80%]" />
              <div className="h-[10px] bg-[#E5E7EB] rounded-full w-[70%]" />
              <div className="h-[60px] bg-[#F4F6FA] rounded-[12px]" />
            </div>

            {/* Right Panel */}
            <div className="w-[90px] space-y-[12px]">
              <div className="h-[60px] bg-[#F4F6FA] rounded-[12px]" />
              <div className="h-[40px] bg-[#F4F6FA] rounded-[12px]" />
            </div>

          </div>
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-[18px] text-[13px] text-[#9CA3AF] font-medium">
        Social Tracking Platform
      </p>
    </div>
  );
}