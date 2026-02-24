import TopNav from "@/components/navigation/TopNav";
import ProjectHeader from "@/components/dashboard/ProjectHeader";
import TotalVisitsCard from "@/components/dashboard/TotalVisitsCard";
import PerpetualCard from "@/components/dashboard/PerpetualCard";
import ActivePercentageCard from "@/components/dashboard/ActivePercentageCard";
import SuperiorityCard from "@/components/dashboard/SuperiorityCard";
import SocialTrackingCard from "@/components/dashboard/SocialTrackingCard";
import IncomeCard from "@/components/dashboard/IncomeCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen pb-12 ">
      <TopNav />

      <div className="max-w-[1440px] mx-auto px-10 pt-20 pb-12">
        <ProjectHeader />

        <div className="grid grid-cols-[minmax(0,1fr)_336px] gap-10 mt-8">
          
          <div className="flex flex-col gap-8 min-w-0">
            <TotalVisitsCard />

            <div className="grid grid-cols-2 gap-8">
              <PerpetualCard />
              <ActivePercentageCard />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <SuperiorityCard />
            <SocialTrackingCard />
            <IncomeCard />
          </div>

        </div>
      </div>
    </div>
  );
}