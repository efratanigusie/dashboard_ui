"use client";

import { Plus } from "lucide-react";

export default function ProjectHeader() {
  return (
    <div className="space-y-[16px]">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-[10px] text-[12px] leading-none">
        <span className="uppercase tracking-[0.08em] font-semibold text-[#6C5DD3]">
          DASHBOARD
        </span>

        <span className="w-[3px] h-[3px] bg-[#C7C9D9] rounded-full" />

        <span className="text-[#9A9AB0] font-medium">
          Overview 2020
        </span>
      </div>

      {/* Project Row */}
      <div className="flex items-center gap-[14px]">
        
        {/* Logo */}
        <div className="relative w-[46px] h-[46px] rounded-full bg-[#11142D] flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
          
          {/* Cyan curved SVG */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            className="rotate-[-18deg]"
          >
            <path
              d="M4 12c0-4.5 3.5-8 8-8 2.8 0 5.2 1.2 6.7 3.3-1.2-.7-2.5-1-3.9-1-4.5 0-8 3.5-8 8 0 2.5 1.2 4.7 3.1 6.2C6.5 19.8 4 16.3 4 12Z"
              fill="#00E5D0"
            />
          </svg>
        </div>

        {/* Project Name */}
        <h2 className="text-[20px] leading-none font-semibold text-[#11142D] tracking-[-0.01em]">
          wubin.design
        </h2>

        {/* Plus Button */}
        <button
          className="
            ml-[6px]
            w-[32px] h-[32px]
            rounded-[10px]
            border border-[#E9EAF3]
            flex items-center justify-center
            transition-all duration-200
            hover:bg-white
            hover:shadow-[0_6px_16px_rgba(17,20,45,0.06)]
            active:scale-95
          "
        >
          <Plus size={14} strokeWidth={2} className="text-[#11142D]" />
        </button>

      </div>
    </div>
  );
}