import {
  AboutSection,
  HeroSection,
  PopularSection,
  Screen,
  StyleSection,
} from "../components";

export default function Home() {
  return (
    <Screen>
      <HeroSection />
      <AboutSection />
      <PopularSection />
      <StyleSection />
    </Screen>
  );
}
