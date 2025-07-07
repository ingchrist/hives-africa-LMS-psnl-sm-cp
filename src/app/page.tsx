import { HeroSection } from "@/components/ui/hero-section";
import { GrowSection } from "@/components/ui/grow-section";
import { CoursesSection } from "@/components/ui/courses-section";
import { ContainerStats } from "@/components/ui/container-stats";
import { FeaturesSection } from "@/components/ui/features-section";
import { CommunitySection } from "@/components/ui/community-section";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import { FAQSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GrowSection />
      <CoursesSection />
      <ContainerStats />
      <FeaturesSection />
      <CommunitySection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
}
