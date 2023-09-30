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

const Division = () => {
  return (
    <div className="pt-20">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-6 xl:grid-cols-3">
        <div className="space-y-4 px-6 md:px-0">
          <h2 className="text-xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 sm:text-4xl">
            Divisi
          </h2>
          <p className="mt-6 text-xs leading-4 text-gray600">
            Terdapat 4 divisi PIK-M Janadi Sahwahita :
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 p-6 md:p-0 gap-y-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {lead.map((s, e) => {
            return (
              <li key={e}>
                <div className="flex flex-col md:flex-row gap-x-6">
                  <div />

                  <div>
                    <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900 md:text-left">
                      {s.name}
                    </h3>
                    <p className="text-xs font-normal leading-6 text-gray600 md:text-left">
                      {s.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Division;
