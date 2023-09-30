import Image from "next/image";
import Link from "next/link";
import Modal from "../layout/modal";
import { useCallback, useState } from "react";

interface ProgramInterface {
  title?: string;
}
const a: Array<ProgramInterface> = [
  {
    title: "Pemilihan Duta Genre Instiki 2024",
  },
  {
    title: "Sharing Session Live Instagram",
  },
  {
    title: "PikFestival 5",
  },
  {
    title: "Memperingati Hari HIV AIDS Sedunia",
  },
];

const Program = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ProgramInterface>();

  const opens = useCallback(
    (d: ProgramInterface) => {
      setSelected(d);
      setOpen(true);
    },
    [selected, open]
  );

  return (
    <>
      <Modal title={String(selected?.title)} open={open} setOpen={setOpen} />
      <div className="w-full h-full relative isolate pt-20">
        <div className="space-y-14">
          <div className="space-y-4 px-6 md:px-0">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 sm:text-4xl">
              Our Programs
            </h2>
            <p className="mt-6 text-xs leading-4 text-gray600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>

          <div className="w-full flex items-center gap-4 px-2 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {a.map((s: ProgramInterface, r) => {
              return (
                <div key={r} className="flex-none">
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md flex-none relative">
                    <a href="#">
                      <h5 className="mb-2 md:text-base truncate text-sm font-bold tracking-tight text-gray-900 break-words">
                        {s.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray600 text-xs">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <button
                      onClick={() => opens(s)}
                      className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
