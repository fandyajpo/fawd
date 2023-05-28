const Banner = () => {
  return (
    <div className="w-full h-52 mt-16 relative isolate">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
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
      <div className="w-full p-4 text-center bg-white border border-gray-200 shadow">
        <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 ">
          Building Extraordinary Developers at INSTIKI
        </h5>
        <p className="mb-5 text-gray-500 text-sm ">
          IDC empowers developers at INSTIKI to reach new heights. Through
          workshops, projects, and innovation, we shape the future of tech.
        </p>
      </div>
    </div>
  );
};

export default Banner;
