import { IDCVERTICAL } from "../svg";
import Link from "next/link";
const Landing = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red500 via-red600 to-orange700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <IDCVERTICAL />
            </div>
            <h1 className="text-4xl md:text-5xl drop-shadow-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red500 to-orange700">
              Developers Grow Here
            </h1>
            <div className="flex flex-col-reverse md:flex-col">
              <p className="mt-4 text-sm leading-6 md:leading-8 text-gray800">
                Aku IDC, UKM untuk para Developer di INSTIKI. UKM yang penuh
                dengan mahasiswa INSTIKI yang memiliki potensi untuk menjadi
                seorang Developer. UKM yang seharusnya bisa menjadi UKM raksasa
                karena aku berbasis di kampus IT.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Link
                  href="#"
                  className="rounded-md bg-red500  px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-red900 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join with us
                </Link>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  About <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
