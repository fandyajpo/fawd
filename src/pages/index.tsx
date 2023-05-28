import LayoutProvider from "@/components/layout";
import Screen from "@/components/layout/screen";
import Circle from "@/components/layout/circle";
import Landing from "@/components/page/Landing";
import About from "@/components/page/About";
import Team from "@/components/page/Team";
import Program from "@/components/page/Program";
export default function Home() {
  return (
    <>
      <Circle />
      <Screen color="white" id="landing">
        <Landing />
      </Screen>
      <Screen color="white" id="about">
        <About />
      </Screen>
      <Screen color="white" id="program">
        <Program />
      </Screen>
      <Screen color="white" id="team">
        <Team />
      </Screen>
    </>
  );
}

Home.layout = LayoutProvider;
