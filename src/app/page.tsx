import { ExploreSection } from "@/components/ExploreSection/ExploreSection";
import { HomePageHero } from "@/components/HomepageHero/Hero";
import WhatIsCP from "@/components/WhatIsCP/Whatiscp";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CP-Club",
  description: "Official Page of CP club at NST",
};

export default function Home() {
  return (
    <div>
      <HomePageHero/>
      <ExploreSection/>
      <WhatIsCP/>
    </div>
  );
}