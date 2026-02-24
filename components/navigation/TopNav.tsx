"use client";

import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function TopNav() {
  return (
    <header className="w-full h-[56px] bg-[#F5F6FA] border-b border-[#E6E8F0]">
      <div className="h-full px-6 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center">
          <nav className="flex items-end gap-6">
            
            {/* ACTIVE TAB */}
            <div className="relative h-[56px] flex items-end pr-5">
              <span className="text-[14px] leading-none font-medium text-[#11142D] pb-[18px]">
                Dashboard
              </span>
              {/* underline */}
              <span className="absolute bottom-0 left-0 w-[24px] h-[3px] bg-[#11142D] rounded-full" />
            </div>

            {/* INACTIVE */}
            <span className="text-[14px] leading-none font-medium text-[#8F95B2] pb-[18px] pr-5 cursor-pointer">
              Advanced Query
            </span>

            <span className="text-[14px] leading-none font-medium text-[#8F95B2] pb-[18px] cursor-pointer">
              Events
            </span>

            <Search
              size={16}
              strokeWidth={2}
              className="text-[#8F95B2] ml-2 mb-[18px]"
            />
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-medium text-[#1A1D2E]">
            wubin.design
          </span>

          <Image
            src="https://i.pravatar.cc/100"
            alt="avatar"
            width={32}
            height={32}
            className="rounded-full"
          />

          <ChevronDown
            size={16}
            strokeWidth={2}
            className="text-[#1A1D2E]"
          />
        </div>

      </div>
    </header>
  );
}