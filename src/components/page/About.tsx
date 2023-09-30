// import Image from "next/image";

// const About = () => {
//   return (
//     <div className="w-full h-full relative isolate space-y-20 pt-20">
//       <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-x-0 divide-black/10 md:divide-x md:divide-y-0 md:space-y-3">
//         <div className="w-full h-44 flex flex-col items-center justify-center text-center gap-4 px-4">
//           <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue500 to-green-500">
//             Design Guideline
//           </h2>
//           <p>
//             We build the design guideline to help you understand the design
//             system clearly
//           </p>
//         </div>
//         <div className="w-full h-44 flex flex-col items-center justify-center text-center gap-4 px-4">
//           <p>Be open to feedback</p>
//           <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-red500">
//             To Improve your Soft Skills in the workspace
//           </h2>
//         </div>
//         <div className="w-full h-44 flex flex-col items-center justify-center text-center gap-4 px-4">
//           <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue500 to-green-500">
//             Design Tutorial
//           </h2>
//           <p>
//             These libraryes would help the designer understand and work
//             correctly with the system
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

"use client";
const lead = [
  {
    name: "Konselor",
    description:
      "menjadi sarana bagi mahasiswa ataupun anggota PIK-M dan masyarakat umum untuk melakukan konseling",
  },
  {
    name: "Minat bakat",
    description:
      "bertugas untuk membangun hubungan baik dengan seluruh anggota PIK-M, biasanya membuat kegiatan untuk mempererat persaudaraan UKM",
  },
  {
    name: "Humas",
    description:
      "bekerja sama dengan pihak luar UKM, mulai dari internal kampus atau eksternal kampus",
  },
  {
    name: "Kominfo",
    description:
      "Kominfo bertugas untuk membuat pamflet, membawa akun ig pik m, dan mempublikasikan seluruh kegiatan PIK-M",
  },
];

const dataList = [
  {
    title: "PIK-M Janadi Sahwahita",
    content:
      "Dengan nama ini diharapkan anggota PIK-M menjadi pribadi yang baik dalam berbagai aspek sehingga dapat memberikan manfaat bagi orang-orang disekitarnya.",
    child: [
      "Janadi berarti manusia yang baik,",
      "Sahwahita berarti bermanfaat untuk sesama",
    ],
  },
  {
    title: "Symbol",
    content:
      "Lingkaran luar berwarna merah dan biru dengan simbol bulat ditengahnya menggambarkan para remaja yang saling berpegang teguh satu sama lain untuk mensosialisasikan dan menghindari tiga masalah remaja (Triad KRR).",
  },
  {
    title: "Colour",
    child: [
      "Merah melambangkan keberanian,",
      "Biru melambangkan kerukunan dan kekeluargaan,",
      "Putih melambangkan kesucian dan kebenaran,",
      "Emas melambangkan kebanggaan terhadap INSTIKI,",
    ],
  },
];

const Division = () => {
  return (
    <div className="pt-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-6 xl:grid-cols-3">
        <div className="space-y-4 px-6 md:px-0">
          <h2 className="text-xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 sm:text-4xl">
            About PIK M
          </h2>
          <p className="mt-6 text-xs leading-4 text-gray600">
            Tentang PIK-M Janadi Sahwahita :
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex flex-col md:flex-row items-center gap-x-6">
              <div>
                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900 md:text-left">
                  PIK-M Janadi Sahwahita
                </h3>
                <ul className="list-disc">
                  <li>
                    <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                      Janadi berarti manusia yang baik
                    </p>
                  </li>
                  <li>
                    <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                      Sahwahita berarti bermanfaat untuk sesama.
                    </p>
                  </li>
                </ul>
                <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                  Dengan nama ini diharapkan anggota PIK-M menjadi pribadi yang
                  baik dalam berbagai aspek sehingga dapat memberikan manfaat
                  bagi orang-orang disekitarnya
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col md:flex-row gap-x-6">
              <div>
                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900 md:text-left">
                  🔰
                </h3>

                <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                  Lingkaran luar berwarna merah dan biru dengan simbol bulat
                  ditengahnya menggambarkan para remaja yang saling berpegang
                  teguh satu sama lain untuk mensosialisasikan dan menghindari
                  tiga masalah remaja (Triad KRR).
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col md:flex-row items-center gap-x-6">
              <div>
                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900 md:text-left">
                  Warna Logo
                </h3>
                <ul className="list-disc">
                  <li>
                    <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                      Merah melambangkan keberanian
                    </p>
                  </li>
                  <li>
                    <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                      Biru melambangkan kerukunan dan kekeluargaan
                    </p>
                  </li>
                  <li>
                    <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                      Putih melambangkan kesucian dan kebenaran
                    </p>
                  </li>
                  <li>
                    <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                      Emas melambangkan kebanggaan terhadap INSTIKI
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col md:flex-row gap-x-6">
              <div>
                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900  md:text-left">
                  🔰
                </h3>

                <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                  Lambang pita melambangkan PIK-M mampu mengendalikan HIV/AIDS.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col md:flex-row gap-x-6">
              <div>
                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900  md:text-left">
                  🔰
                </h3>

                <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                  Lambang Obat dan tengkorak melambangkan PIK-M mampu
                  mengendalikan Narkotika.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col md:flex-row gap-x-6">
              <div>
                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900  md:text-left">
                  🔰
                </h3>

                <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                  Lambang sex melambangkan PIK-M mampu mengendalikan sex
                  beresiko.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col md:flex-row gap-x-6">
              <div>
                <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900  md:text-left">
                  INSTIKI
                </h3>

                <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                  Logo INSTIKI melambangkan bahwa UKM PIK-M Janadi Sahwahita
                  adalah UKM yang berdiri di bawah Institut Bisnis dan Teknologi
                  Indonesia
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Division;
