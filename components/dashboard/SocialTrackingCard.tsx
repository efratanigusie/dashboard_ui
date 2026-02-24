export default function SocialTrackingCard() {
  return (
    <div className="w-[352px] 
                    bg-[#F7F8FC] 
                    p-[16px] 
                    rounded-[28px]">

      {/* Floating Card */}
      <div className="bg-white 
                      rounded-[24px] 
                      shadow-[0_25px_60px_rgba(17,20,45,0.08)] 
                      backdrop-blur-[2px] 
                      overflow-hidden">

        {[
          {
            name: "Google",
            label: "Social Tracking",
            bg: "bg-white",
            svg: (
              <svg viewBox="0 0 48 48" className="w-6 h-6">
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.5 33.6 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 1.1 8.3 3l6.2-6.2C34.6 3.3 29.6 1 24 1 10.7 1 0 11.7 0 25s10.7 24 24 24 23-10.7 23-24c0-1.6-.2-3.3-.5-5z"/>
              </svg>
            ),
          },
          {
            name: "Foursquare",
            label: "Social Tracking",
            bg: "bg-[#FF4F81]",
            svg: (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M6 2h12a1 1 0 011 1l-2 10a2 2 0 01-2 1.6H9l-1 6-2-1 1-6H5a1 1 0 01-1-1L5 3a1 1 0 011-1z"/>
              </svg>
            ),
          },
          {
            name: "Kickstarter",
            label: "Social Tracking",
            bg: "bg-[#2EBE6E]",
            svg: (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M9 3h3v8l5-5h3l-6 6 6 6h-3l-5-5v8H9V3z"/>
              </svg>
            ),
          },
          {
            name: "Gadget",
            label: "Social Tracking",
            bg: "bg-[#FFD84D]",
            svg: (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-black fill-current">
                <path d="M12 2C6.5 2 2 6 2 11c0 2.8 1.6 5.3 4 6.8V22l4-2h2c5.5 0 10-4 10-9s-4.5-9-10-9z"/>
              </svg>
            ),
          },
        ].map((item, index, arr) => (
          <div
            key={index}
            className={`flex items-center gap-[16px]
                        px-[24px] h-[76px]
                        ${index !== arr.length - 1 ? "border-b border-[#F1F2F6]" : ""}
                       `}
          >
            {/* Icon */}
            <div className={`w-[48px] h-[48px] 
                             rounded-full 
                             flex items-center justify-center 
                             shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]
                             ${item.bg}`}>
              {item.svg}
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <span className="text-[12px] 
                               font-medium 
                               text-[#A0A3BD] 
                               leading-[16px]">
                {item.label}
              </span>

              <span className="text-[15px] 
                               font-semibold 
                               text-[#11142D] 
                               leading-[20px] 
                               mt-[2px]">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}