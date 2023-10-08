import Image from "next/image";
import Modal from "../layout/modal";
import { Right } from "../svg";
import Link from "next/link";
import { useState } from "react";
import one from "public/core/1.jpeg";
import two from "public/core/2.jpeg";
import three from "public/core/3.jpeg";
import four from "public/core/4.jpeg";
import five from "public/core/5.jpeg";
import six from "public/core/6.jpeg";
import seven from "public/core/7.jpeg";

import eight from "public/team/8.jpeg";
import nine from "public/team/9.jpeg";
import ten from "public/team/10.jpeg";
import eleven from "public/team/11.jpeg";
import twelve from "public/team/12.jpeg";
import thirteen from "public/team/13.jpeg";

const lead = [
  {
    name: "Ni Made Diah Nandita Pangestu",
    role: "Ketua",
    src: six,
  },
  {
    name: "Made Adhitya Dwipayana",
    role: "Wakil I",
    src: two,
  },
  {
    name: "I Wayan Andi Aryandi",
    role: "Wakil II",
    src: one,
  },
  {
    name: "Ni Kadek Wulan Artika Sari",
    role: "Bendahara I",
    src: three,
  },
  {
    name: "Ni Komang Dea Agnesya",
    role: "Bendahara II",
    src: four,
  },
  {
    name: "Paulina Aquileia Neldi",
    role: "Sekretaris I",
    src: five,
  },
  {
    name: "Olivia Sutriani Jelni",
    role: "Sekretasris II",
    src: seven,
  },
];

const data = [
  {
    name: "Wayan Yumara Pitudeska",
    role: "Wk Konselor",
    src: eight,
  },
  {
    name: "Ni Putu Dewi Sekarini",
    role: "Wk humas",
    src: nine,
  },
  {
    name: "Rizki Ayu Amalia Haris",
    role: "Koor Konselor",
    src: ten,
  },
  {
    name: "Komang Dina Krisna Launa",
    role: "Koor Humas",
    src: eleven,
  },
  {
    name: "I Putu Danan Mahardika",
    role: "Koor Minat Bakat",
    src: twelve,
  },
  {
    name: "I Dewa Gede Dika Mahendra",
    role: "Koor Kominfo",
    src: thirteen,
  },
];

const Team = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Modal open={open} setOpen={setOpen} /> */}

      <div className="py-24">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-6 xl:grid-cols-3">
          <div className="space-y-4 px-6 md:px-0">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 sm:text-4xl">
              Team Inti
            </h2>
            {/* <p className="mt-6 text-xs leading-4 text-gray600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p> */}
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
          >
            {lead.map((s, e) => {
              return (
                <li key={e}>
                  <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2">
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={s.src}
                      alt="core"
                      width={500}
                      height={500}
                    />

                    <div>
                      <h3 className="text-sm font-semibold leading-4 tracking-tight text-gray-900 text-center md:text-left">
                        {s.name}
                      </h3>
                      <p className="text-xs font-normal leading-6 text-gray600 text-center md:text-left">
                        {s.role}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-full h-full relative isolate">
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
        {/* <button onClick={() => setOpen(true)}>Open</button> */}
        <div className="space-y-6">
          <div className="space-y-4 px-6 md:px-0">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 sm:text-4xl">
              Team
            </h2>
            <p className="mt-6 text-xs leading-4 text-gray600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>

          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 grid-cols-2 md:grid-cols-4 sm:gap-y-16 lg:grid-cols-5"
          >
            {data.map((a, i) => {
              return (
                <li key={i}>
                  <div className="flex flex-col items-center gap-x-6 gap-y-2">
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={a.src}
                      alt="core"
                      width={500}
                      height={500}
                    />
                    <div>
                      <h3 className="text-sm font-semibold leading-4 tracking-tight text-gray-900 text-center">
                        {a.name}
                      </h3>
                      <p className="text-xs font-normal leading-6 text-gray600 text-center">
                        {a.role}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Team;
