import { Info } from "lucide-react";

export default function IncomeCard() {
  const percentage = 40;
  const radius = 28;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="w-[260px]">
      
      {/* Title */}
      <div className="flex items-center gap-[6px] mb-[14px]">
        <h3 className="text-[14px] font-semibold text-[#11142D]">
          My Income
        </h3>
        <Info size={14} strokeWidth={2} className="text-[#A0A3BD]" />
      </div>

      {/* Card */}
      <div
        className="
          bg-white
          rounded-[20px]
          px-[18px]
          py-[16px]
          flex items-center justify-between
          shadow-[0_20px_40px_rgba(17,20,45,0.06)]
        "
      >
        {/* Left Side (Ring + Text) */}
        <div className="flex items-center gap-[14px]">
          
          {/* Progress Ring */}
          <div className="relative w-[64px] h-[64px]">
            <svg
              height="64"
              width="64"
              className="rotate-[-90deg]"
            >
              {/* Background Track */}
              <circle
                stroke="#F1F2F6"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx="32"
                cy="32"
              />

              {/* Progress */}
              <circle
                stroke="#5B4CF0"
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx="32"
                cy="32"
              />
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[12px] font-semibold text-[#11142D]">
                {percentage}%
              </span>
            </div>
          </div>

          {/* Label */}
          <div className="flex flex-col">
            <span className="text-[13px] font-medium text-[#11142D] leading-[18px]">
              Logged
            </span>
          </div>
        </div>

        {/* Right Side Growth */}
        <span className="text-[13px] font-semibold text-[#5B4CF0]">
          +22%
        </span>
      </div>
    </div>
  );
}