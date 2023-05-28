import Image from "next/image";
import Modal from "../layout/modal";
import { Right } from "../svg";
import Link from "next/link";
import { useState } from "react";

const lead = [
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
];

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
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Modal open={open} setOpen={setOpen} /> */}

      <div className="py-24">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-6 xl:grid-cols-3">
          <div className="space-y-4 px-6 md:px-0">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red500 to-orange500 sm:text-4xl">
              IDC Founder
            </h2>
            <p className="mt-6 text-xs leading-4 text-gray600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
          >
            {lead.map(() => {
              return (
                <li>
                  <div className="flex flex-col md:flex-row items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900 text-center md:text-left">
                        Leslie Alexander
                      </h3>
                      <p className="text-xs font-normal leading-6 text-gray600 text-center md:text-left">
                        Co-Founder
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
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red500 to-orange500 sm:text-4xl">
              Teammates
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
                <li>
                  <div className="flex flex-col items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900 text-center">
                        Leslie Alexander
                      </h3>
                      <p className="text-xs font-normal leading-6 text-gray600 text-center">
                        Co-Founder
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
