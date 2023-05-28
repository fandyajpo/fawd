const data = [
  { name: "Fandy", role: "Founder" },
  { name: "Agusto", role: "Co-Founder" },
  { name: "Dayu", role: "Vercel Team" },
  { name: "Wisnu", role: "Netlify" },
  { name: "Fandy", role: "Founder" },
  { name: "Fandy", role: "Founder" },
  { name: "Fandy", role: "Founder" },
  { name: "Fandy", role: "Founder" },
  { name: "Fandy", role: "Founder" },
];

import EmblaCarousel from "../layout/embla";

const Program = () => {
  return (
    <div className="w-full h-full relative isolate pt-20">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-64"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[44.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-orange500 via-blue400 to-red500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="space-y-14">
        <div className="space-y-4 px-6 md:px-0">
          <h1 className="text-xl font-semibold text-gray800">Program</h1>
          <p className="w-11/12 text-sm font-light">
            We{"’"}re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </div>

        <EmblaCarousel />
        <div className="w-full flex gap-6 overflow-x-auto md:gap-2 md:grid md:grid-cols-4">
          <div className="flex-none">
            <img
              className=" w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div className="flex-none">
            <img
              className=" w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div className="flex-none">
            <img
              className=" w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div className="flex-none">
            <img
              className=" w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div className="flex-none">
            <img
              className=" w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div className="flex-none">
            <img
              className=" w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          {/* <div className="snap-center shrink-0">
              <div className="shrink-0 w-4 sm:w-48"></div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Program;
