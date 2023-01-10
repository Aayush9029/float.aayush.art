import Ribbon from "@/components/common/Ribbon";
import HeroSection from "./sections/HeroSection";
import IntroFeaturesSection from "./sections/IntroFeaturesSection";
import links from "@/data/links";

export default function HomePage() {
  return (
    <div>
      {/* <Ribbon onClick={() => window.open(links.githubProject)}>
        Float is currently in development. Check out the roadmap.
      </Ribbon> */}
      <HeroSection />
      <IntroFeaturesSection />
    </div>
  );
}
