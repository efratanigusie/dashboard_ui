export default function ActivePercentageCard() {
  return (
    <div className="bg-white rounded-[24px] p-[32px] w-[420px] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
      
      {/* Title */}
      <h3 className="text-[16px] font-semibold text-[#11142D] mb-[20px]">
        Active Percentage
      </h3>

      {/* Main Number */}
      <p className="text-[36px] font-semibold text-[#11142D] leading-none mb-[24px]">
        594
      </p>

      {/* Progress Bar */}
      <div className="w-full h-[10px] bg-[#ECECF2] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#5B4CF0] rounded-full"
          style={{ width: "68%" }}
        />
      </div>

      {/* Legend Section */}
      <div className="flex justify-between mt-[28px]">

        {/* Active */}
        <div className="flex flex-col">
          <div className="flex items-center gap-[8px] mb-[6px]">
            <div className="w-[20px] h-[3px] bg-[#5B4CF0] rounded-full" />
            <span className="text-[12px] text-[#9CA3AF] font-medium">
              Active
            </span>
          </div>
          <p className="text-[14px] font-semibold text-[#11142D] ml-[28px]">
            179 users
          </p>
        </div>

        {/* Other */}
        <div className="flex flex-col">
          <div className="flex items-center gap-[8px] mb-[6px]">
            <div className="w-[20px] h-[3px] bg-[#CFC9FF] rounded-full" />
            <span className="text-[12px] text-[#9CA3AF] font-medium">
              Other
            </span>
          </div>
          <p className="text-[14px] font-semibold text-[#11142D] ml-[28px]">
            254 users
          </p>
        </div>

      </div>
    </div>
  );
}