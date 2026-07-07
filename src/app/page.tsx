import { Hero } from "@/components/sections/Hero";
import { EnterpriseProof } from "@/components/sections/EnterpriseProof";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <EnterpriseProof />
      <AboutSnippet />
      <FeaturedProjects />
      <ExperienceTimeline />
      <ServicesOverview />
      <ContactCTA />
    </>
  );
}
