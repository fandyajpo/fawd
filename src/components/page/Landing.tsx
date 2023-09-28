import { IDCVERTICAL } from "../svg";
import PIKM from "public/pikm.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated, useTrail } from "@react-spring/web";
import { useEffect, useState, Children } from "react";

const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({
  open,
  children,
}) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} style={style}>
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

const Landing = () => {
  const [open, set] = useState(true);
  const [props, api] = useSpring(
    () => ({
      delay: 500,
      from: { opacity: 0, scale: 0.6 },
      to: { opacity: 1, scale: 1 },
    }),
    []
  );

  useEffect(() => {
    api.start();

    return () => {
      api.stop();
    };
  }, []);

  const inputText = "Developers Grow Here";
  const DevelopersGrowHere = inputText.split("");

  return (
    <div className="bg-white">
      <div className="relative isolate px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 via-blue-500 to-violet-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <animated.div
              style={props}
              className="flex justify-center items-center py-20"
            >
              <Image
                src={PIKM}
                alt="Hha"
                className="w-44 h-44 rounded-full shadow-sm"
              />
              {/* <IDCVERTICAL /> */}
            </animated.div>

            {/* @ts-ignore */}
            <Trail open={open}>
              <h1 className="text-4xl md:text-5xl drop-shadow-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                PIK
              </h1>
              <h1 className="text-4xl md:text-5xl drop-shadow-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500">
                M
              </h1>
              <h1 className="text-4xl md:text-5xl drop-shadow-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Janadi Sahwahita
              </h1>
            </Trail>
            {/* </h1> */}
            <div className="flex flex-col-reverse md:flex-col">
              <p className="mt-4 text-sm leading-6 md:leading-8 text-gray800">
                Pusat Informasi dan Konseling Mahasiswa Janadi Sahwahita adalah
                salah satu organisasi mahasiswa yang berada di Institus Bisnis
                dan Teknologi Indonesia dan bertanggung jawab kepada Dinas
                Pemberdayaan Perempuan Dan Perlindungan Anak, Pengendalian
                Penduduk Dan Keluarga Berencana (P3AP2KB) Kota Denpasar, Pembina
                Pusat Informasi dan Konseling Mahasiswa serta Wakil Rektor III
                dan Bidang Kemahasiswaan Institus Bisnis dan Teknologi
                Indonesia.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                {/* <Link
                  href="#"
                  className="rounded-md bg-red500  px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-red900 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join with us
                </Link> */}
                {/* <Link
                  href={""}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red500 rounded-lg hover:bg-red700 focus:ring-4 focus:outline-none focus:ring-red200"
                >
                  Join with us
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
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  About <span aria-hidden="true">→</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#009fe9] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
