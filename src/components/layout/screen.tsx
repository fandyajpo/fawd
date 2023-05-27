import { memo } from "react";
import { IScreen } from "@/types/interface";

const Screen = memo((props: IScreen) => {
  return (
    <section
      className="h-screen flex flex-col items-center"
      style={{
        backgroundColor: props.color,
      }}
    >
      <div className="md:max-w-2xl lg:max-w-4xl duration-1000 xl:max-w-7xl w-screen h-screen flex flex-col items-stretch grow flex-shrink-0 gap-x-4 md:p-2 py-2">
        {props.children}
      </div>
    </section>
  );
});

Screen.displayName = "Screen";
export default Screen;
