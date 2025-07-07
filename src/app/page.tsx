import { HeroSection } from "@/components/ui/hero-section";
import { GrowSection } from "@/components/ui/grow-section";
import { CoursesSection } from "@/components/ui/courses-section";
import { ContainerStats } from "@/components/ui/container-stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GrowSection />
      <CoursesSection />
      <ContainerStats />
    </>
  );
}
