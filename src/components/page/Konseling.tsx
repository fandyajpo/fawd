import Image from "next/image";
import { TIKTOK, INSTAGRAM } from "../svg";
import Link from "next/link";
import SharingSession1 from "public/sharing-session/sharing-session-1.jpeg";
import SharingSession2 from "public/sharing-session/sharing-session-2.jpeg";
import KonselingCard from "./card/konselingUser";

const a = [
  {
    image: SharingSession1,
    name: "Rizki Ayu Amalia Haris",
    number: "https://wa.me/+6281236855788",
    numberDesktop:
      "https://web.whatsapp.com/send/?phone=%2B6281236855788&text&type=phone_number&app_absent=0",
    instagram: "https://instagram.com/rizki_1806?igshid=MzRlODBiNWFlZA==",
    tiktok: "https://www.tiktok.com/@rizkiamalia0121?_t=8gHkDGDZ2fQ&_r=1",
    description: `Kamu punya masalah? 
    Tapi nggak tau mau ceritain ke siapa? 
    Mau cerita ke teman, takut dibocorin rahasiamu 😌😌 .. 
    Tenang sekarang PIK-M sudah menyediakan Konselor sebaya untuk mendengar cerita kamu serta menjaga kerahasiaan nya.. Dan akan memberikan solusi dari permasalahan yang sedang kamu hadapi.. 
    Yuk ceritain masalah kamu pada orang yang tepat dan terpercaya 👌🏻
    `,
  },
  {
    image: SharingSession2,
    name: "Wayan Yumara Pitudeska",
    number: "https://wa.me/+6287861409641",
    numberDesktop:
      "https://web.whatsapp.com/send/?phone=%2B6287861409641&text&type=phone_number&app_absent=0",
    instagram: "https://instagram.com/wayanyumara?igshid=MzRlODBiNWFlZA==",
    tiktok: "https://www.tiktok.com/@wayang7deska?_t=8gHkNWLX0rg&_r=1",
    description: `Jika kamu merasa bebanmu lebih berat daripada yang lain, itu karena Tuhan melihatmu lebih kuat daripada yang lain
    `,
  },
];

const Konseling = () => {
  return (
    <>
      <div className="w-full h-full relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-64"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[44.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-orange500 via-blue400 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="space-y-14">
          <div className="space-y-4 px-6 md:px-0">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 sm:text-4xl">
              Kami Membuka Sesi Konseling
            </h2>
            <p className="mt-6 text-xs leading-4 text-gray600">
              Kami Membuka Sesi Konseling Yuk ceritain masalahmu dengan
              menghubungi kakak-kakak di bawah ini!!! Dengan bercerita kita bisa
              mengurangi rasa stres yang melanda pikiran, jadi jangan dipendam
              ya!!! Sttt kami menjaga penuh kerahasiaan dan privasi kalian
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-4 px-2 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3">
            {a.map((s, r) => {
              return (
                <KonselingCard
                  key={r}
                  tiktok={s.tiktok}
                  description={s.description}
                  image={s.image}
                  instagram={s.instagram}
                  name={s.name}
                  number={s.number}
                  numberDesktop={s.numberDesktop}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Konseling;
