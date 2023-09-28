export const dynamic = "force-static";
import LayoutProvider from "@/components/layout";
import Screen from "@/components/layout/screen";
import Circle from "@/components/layout/circle";
import Landing from "@/components/page/Landing";
import About from "@/components/page/About";
import Team from "@/components/page/Team";
import Program from "@/components/page/Program";
import Banner from "@/components/page/Banner";
import Konseling from "@/components/page/Konseling";
import Division from "@/components/page/Division";
const Home = () => {
  return (
    <>
      <Circle />
      <Screen color="white" id="landing">
        <Landing />
      </Screen>
      <Banner />
      <Screen color="white" id="about">
        <About />
      </Screen>
      <Screen color="white" id="about">
        <Division />
      </Screen>
      <Screen color="white" id="sharing">
        <Konseling />
      </Screen>
      <Screen color="white" id="program">
        <Program />
      </Screen>
      <Screen color="white" id="team">
        <Team />
      </Screen>
    </>
  );
};

Home.layout = LayoutProvider;
export default Home;
