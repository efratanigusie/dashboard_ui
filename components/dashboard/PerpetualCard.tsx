"use client";

const data = [
  {
    name: "Google.com Inc.",
    value: 3124213,
    color: "#5B4CF0",
  },
  {
    name: "Recommended flow",
    value: 1523151,
    color: "#CFC9FF",
  },
  {
    name: "Other",
    value: 948253,
    color: "#8F84FF",
  },
];

export default function PerpetualCard() {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  const size = 232; // exact visual proportion
  const strokeWidth = 16;
  const radius = size / 2;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  let accumulatedPercent = 0;

  return (
    <div className="bg-white rounded-[28px] p-8 shadow-sm w-[640px] font-sans">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-7">
        <h3 className="text-[16px] font-semibold text-[#11142D]">
          Perpetual
        </h3>
        <div className="w-4 h-4 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[10px] text-[#9CA3AF]">
          i
        </div>
      </div>

      <div className="flex items-center gap-32">

        {/* ================= DONUT ================= */}
        <div className="relative flex items-center justify-center"
             style={{ width: size, height: size }}>

          <svg
            width={size}
            height={size}
            className="-rotate-90"
          >
            {/* Background ring */}
            <circle
              stroke="#F3F4F6"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            {/* Segments */}
            {data.map((item, index) => {
              const percent = item.value / total;
              const dash = percent * circumference;
              const gap = circumference - dash;

              const offset = accumulatedPercent * circumference;
              accumulatedPercent += percent;

              return (
                <circle
                  key={index}
                  stroke={item.color}
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${gap}`}
                  strokeDashoffset={-offset}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
              );
            })}
          </svg>

          {/* Center Text */}
          <div className="absolute flex flex-col items-center justify-center text-center">
            <p className="text-[28px] font-bold text-[#11142D] tracking-tight">
              {total.toLocaleString()}
            </p>
            <p className="text-[11px] text-[#B2B3BD] mt-1 tracking-wide">
              Total
            </p>
          </div>
        </div>

        {/* ================= LEGEND ================= */}
        <div className="flex flex-col gap-7">

          {data.map((item, index) => (
            <div key={index}>
              
              {/* Top row */}
              <div className="flex items-center gap-3 mb-1">
                <div
                  className="w-[24px] h-[3px] rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[13px] text-[#9CA3AF] font-medium">
                  {item.name}
                </span>
              </div>

              {/* Value */}
              <p className="text-[15px] font-semibold text-[#11142D] ml-[36px]">
                {item.value.toLocaleString()} users
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}