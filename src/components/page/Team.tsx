import Image from "next/image";
const data = [
  {
    name: "Fandy",
    role: "Founder",
    src: "https://cdn.discordapp.com/attachments/1055060226858029076/1112092759684305016/IMG_20230118_184127_047.jpg",
  },
  {
    name: "Agusto",
    role: "Co-Founder",
    src: "https://cdn.discordapp.com/attachments/1055060226858029076/1112092759684305016/IMG_20230118_184127_047.jpg",
  },
  {
    name: "Dayu",
    role: "Vercel Team",
    src: "https://cdn.discordapp.com/attachments/1055060226858029076/1112092759684305016/IMG_20230118_184127_047.jpg",
  },
  {
    name: "Wisnu",
    role: "Netlify",
    src: "https://cdn.discordapp.com/attachments/1055060226858029076/1112092759684305016/IMG_20230118_184127_047.jpg",
  },
  {
    name: "Fandy",
    role: "Founder",
    src: "https://cdn.discordapp.com/attachments/1055060226858029076/1112092759684305016/IMG_20230118_184127_047.jpg",
  },
  {
    name: "Fandy",
    role: "Founder",
    src: "https://cdn.discordapp.com/attachments/1055060226858029076/1112092759684305016/IMG_20230118_184127_047.jpg",
  },
  {
    name: "Fandy",
    role: "Founder",
    src: "https://cdn.discordapp.com/attachments/1055060226858029076/1112092759684305016/IMG_20230118_184127_047.jpg",
  },
  {
    name: "Fandy",
    role: "Founder",
    src: "https://cdn.discordapp.com/attachments/1055060226858029076/1112092759684305016/IMG_20230118_184127_047.jpg",
  },
  {
    name: "Fandy",
    role: "Founder",
    src: "https://cdn.discordapp.com/attachments/1055060226858029076/1112092759684305016/IMG_20230118_184127_047.jpg",
  },
];

const Team = () => {
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
      <div className="space-y-6">
        <div className="space-y-4 px-6 md:px-0">
          <h1 className="text-xl font-semibold text-gray800">Our Team</h1>
          <p className="w-11/12 md:w-5/6 lg:w-2/4 text-sm font-light">
            We{"’"}re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </div>
        <label className="relative block w-full px-6 md:px-0">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full md:w-2/4 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search name..."
            type="text"
            name="search"
          />
        </label>
        <div className="gap-2 grid grid-cols-2 md:grid-cols-4">
          {data.map((a, i) => {
            return (
              <div
                key={i}
                className=" w-full h-44 flex flex-col items-center justify-center gap-y-4"
              >
                <div className="bg-gray300 rounded-full w-24 h-24 overflow-hidden">
                  {a.hasOwnProperty("src") ? (
                    <Image
                      src={a.src as any}
                      width={500}
                      height={500}
                      alt="hai"
                    />
                  ) : null}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray800 h-6 text-center">
                    {a.name}
                  </p>
                  <p className="text-sm font-normal text-gray600 h-6 text-center">
                    {a.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
