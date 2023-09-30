import Image from "next/image";
import Link from "next/link";
import Modal from "../modal/modal-program";
import { useCallback, useState } from "react";

interface ProgramInterface {
  title?: string;
  content?: string;
}
const a: Array<ProgramInterface> = [
  {
    title: "Pemilihan Duta Genre Instiki 2024",
    content:
      "Pemilihan duta genre Instiki merupakan salah satu program kerja PIK-M Janadi Sahwahita yang bertujuan untuk melahirkan duta genre Instiki yang akan mensosialisasikan terkait penyiapan kehidupan berkeluarga bagi remaja baik di kalangan mahasiswa maupun masyarakat luas. Peserta dari pemilihan duta genre Instiki merupakan mahasiswa aktif instiki yang  telah melalui beberapa tahapan seleksi mulai dari test tulis, test wawancara, test program kerja dan untuk 10 finalis duta genre Instiki akan berlaga pada grand final pemilihan duta genre Instiki",
  },
  {
    title: "Sharing Session Live Instagram",
    content:
      "Sharing session live Instagram merupakan salah satu program kerja PIK-m Janadi Sahwahita dimana kami melakukan kerja sama dengan beberapa PIK m lainnya sebagai partner dalam program kerja sharing session live Instagram ini. Nanti akan ada salah seorang perwakilan dari PIK-M Janadi Sahwahita dan salah seorang perwakilan dari partner PIK m lainnya akan berbincang-bincang terkait adanya permasalahan remaja yang sedang hangat saat ini melalui live Instagram akun official PIK-M Janadi Sahwahita",
  },
  {
    title: "PikFestival 5",
    content:
      "Pikfest atau PIK festival merupakan salah satu event PIK-M Janadi Sahwahita yang di dalamnya terdapat beberapa rangkaian acara mulai dari seminar nasional, perlombaan dan kegiatan PKM atau pengabdian kepada masyarakat",
  },
  {
    title: "Memperingati Hari HIV AIDS Sedunia",
    content: `Program kerja PIK m Janadi Sahwahita lainnya yaitu memperingati hari HIV Aids sedunia. Kegiatan ini dilakukan dengan membagikan bunga mawar dan brosur bahaya HIV Aids bagi pengendara yang melintas di depan kampus INSTIKI dengan tujuan mengajak masyarakat bersama" mencegah virus HIV Aids`,
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
      <Modal
        title={String(selected?.title)}
        content={String(selected?.content)}
        open={open}
        setOpen={setOpen}
      />
      <div className="w-full h-full relative isolate pt-20">
        <div className="space-y-14">
          <div className="space-y-4 px-6 md:px-0">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 sm:text-4xl">
              Program Kerja
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
                      {s?.content && s?.content?.length > 100
                        ? s?.content?.substring(0, 100) + "..."
                        : s?.content}
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
