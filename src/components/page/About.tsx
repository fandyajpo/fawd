const About = () => {
  return (
    <div className="w-full h-full relative isolate pt-20">
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
      <div className="space-y-4 px-6 md:px-0">
        <h1 className="text-xl font-semibold">Apa itu IDC?</h1>
        <p className="text-sm">
          Aku IDC, UKM untuk para Developer di INSTIKI. UKM yang penuh dengan
          mahasiswa INSTIKI yang memiliki potensi untuk menjadi seorang
          Developer. UKM yang seharusnya bisa menjadi UKM raksasa karena aku
          berbasis di kampus IT.
        </p>
        <p className="text-sm">
          Aku terdiri dari banyak Developer yang luar biasa, sudah waktunya siap
          untuk membangun sesuatu hal yang bisa bermanfaat untuk aktivitas
          komunitas kedepannya. Aku tidak ingin menjadi UKM yang sama saja
          dengan UKM lainnya, karena aku sadar bahwa aku punya potensi yang
          lebih dari UKM lainnya, sehingga bisa dipandang lebih oleh warga
          INSTIKI lainnya.
        </p>
        <p className="text-sm font-light">
          Atas dasar hal itu, misi aku saat ini adalah{" "}
          <span className="font-semibold">
            {"“"}membangun UKM Developer menjadi UKM Developer yang seharusnya,
            dengan memulai dari pembangunan pondasi yang kuat.{"”"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
