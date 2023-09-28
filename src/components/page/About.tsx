import Image from "next/image";

const About = () => {
  return (
    <div className="w-full h-full relative isolate space-y-20 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-x-0 divide-black/10 md:divide-x md:divide-y-0 md:space-y-3">
        <div className="w-full h-44 flex flex-col items-center justify-center text-center gap-4 px-4">
          <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue500 to-green-500">
            Design Guideline
          </h2>
          <p>
            We build the design guideline to help you understand the design
            system clearly
          </p>
        </div>
        <div className="w-full h-44 flex flex-col items-center justify-center text-center gap-4 px-4">
          <p>Be open to feedback</p>
          <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-red500">
            To Improve your Soft Skills in the workspace
          </h2>
        </div>
        <div className="w-full h-44 flex flex-col items-center justify-center text-center gap-4 px-4">
          <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue500 to-green-500">
            Design Tutorial
          </h2>
          <p>
            These libraryes would help the designer understand and work
            correctly with the system
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
