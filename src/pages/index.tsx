import LayoutProvider from "@/components/layout";
import Screen from "@/components/layout/screen";
import Circle from "@/components/layout/circle";
import Landing from "@/components/page/Landing";
export default function Home() {
  return (
    <>
      <Circle />

      <Screen color="white">
        <Landing />
      </Screen>
      <Screen color="white">
        <p></p>
      </Screen>
      <Screen color="red">
        <p></p>
      </Screen>
    </>
  );
}

Home.layout = LayoutProvider;
