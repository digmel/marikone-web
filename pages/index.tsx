import {
  AboutSection,
  HeroSection,
  PopularSection,
  Screen,
} from "../components";

export default function Home() {
  return (
    <Screen>
      <HeroSection />
      <AboutSection />
      <PopularSection />
    </Screen>
  );
}
