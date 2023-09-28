import Nextjs from "public/next.png";
import Image from "next/image";

const Bottom = () => {
  const date = new Date();
  return (
    <div className="bg-white flex items-center justify-center px-6 py-2">
      <div className="md:max-w-2xl lg:max-w-4xl duration-1000 xl:max-w-7xl w-screen flex flex-col gap-y-6 items-stretch grow flex-shrink-0 gap-x-4 md:p-2 py-2 px-6 h-auto ">
        <div className="flex items-center gap-x-2">
          <p className="text-md text-transparent bg-clip-text bg-gradient-to-r from-black to-black font-semibold">
            Fanvercel
          </p>
          <p className="text-xs">{date.getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
