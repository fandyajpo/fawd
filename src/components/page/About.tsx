import Image from "next/image";

const About = () => {
  return (
    <div className="w-full h-full relative isolate space-y-20 pt-20">
      {/* <div className="px-6 md:px-0 flex gap-4">
        <div className="flex-none">
          <Image
            className="w-24 h-24"
            alt="preact"
            src={
              "https://cdn.discordapp.com/attachments/1055060226858029076/1112239523234066593/584815e7cef1014c0b5e4978.png"
            }
            width={500}
            height={500}
          />
        </div>
        <div className="w-5/6">
          <h1 className="text-xl font-semibold">Apa itu IDC?</h1>
          <p className="text-sm">
            Aku IDC, UKM untuk para Developer di INSTIKI. UKM yang penuh dengan
            mahasiswa INSTIKI yang memiliki potensi untuk menjadi seorang
            Developer. UKM yang seharusnya bisa menjadi UKM raksasa karena aku
            berbasis di kampus IT.
          </p>

          <p className="text-sm font-light">
            Atas dasar hal itu, misi aku saat ini adalah{" "}
            <span className="font-semibold">
              membangun UKM Developer menjadi UKM Developer yang seharusnya,
              dengan memulai dari pembangunan pondasi yang kuat.
            </span>
          </p>
        </div>
      </div> */}
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
