import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "/src/components/Header";
import Cta from "../components/cta";
import FeatureBox from "components/featurebox";
import Card from "../components/card";
import Pricing2 from "components/Pricing2";

const data = [
  {
    title: "Card 1",
    description: "This is the description for Card 1",
    imageUrl: "/path/to/image1.jpg", // Replace with the actual image URL
  },
  {
    title: "Card 2",
    description: "This is the description for Card 2",
    imageUrl: "/path/to/image2.jpg", // Replace with the actual image URL
  },
  // Add more card data as needed
];

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>EntShift</title>
        <meta name='description" content="EntiShift Software HR' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-20 lg:z-10 w-full py-6 lg:py-4">
        <Header />
      </div>

      <section className="relative mb-32">
        <span className="absolute z-0 w-5/12 h-screen left-0 top-0 bottom-0">
          <Image src="images/decore3.svg" alt="" width={250} height={600} />
        </span>
        <span className="absolute z-0 w-5/12 h-screen right-0 top-8">
          <Image src="images/decore2.svg" alt="" width={600} height={600} />
        </span>

        {/* hero */}
        <div id="home" className="pt-60">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full self-center px-4 lg:w-1/2">
                <h1 className="text-orange-500 font-bold text-xl uppercase mb-6">
                  APLIKASI ABSEN ONLINE
                </h1>
                <h2 className="text-gray-900 font-serif text-[55px] leading-[60px] tracking-tighter mb-5">
                  Kelola dan Tingkatkan Produktivitas Karyawan di Kantor
                </h2>
                <p className="text-gray-500 max-w-lg leading-8 mb-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus. Lorem ipsum dolor sit amet, consectetur . Urna,
                  tortor tempus. Lorem ipsum dolor sit amet, consectetur
                  dipiscing elit. Urna, tortor tempus.
                </p>
                <div className="flex">
                  <Cta />
                </div>
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <div className="relative mt-10 lg:mt-0 lg:right-0">
                  <Image
                    layout=""
                    width={400}
                    height={400}
                    src="/images/hero1.png"
                    alt=""
                    className="max-w-full mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end hero */}

      {/* colab */}
      <section className="mb-36">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="border rounded-3xl shadow-lg p-6">
            <p className="pt-3 font-serif text-center text-1xl text-gray-950">
              1000000+ Perusahaan telah merasakan mudahnya menggunakan EntiShift
            </p>
            <div className="py-6 place-content-center item-center grid gap-5 md:grid-cols-5 lg:grid-cols-5 px-40">
              <div className="w-full">
                <Image src="/images/mitra1.svg" alt="" width={60} height={60} />
              </div>
              <div className="w-full">
                <Image src="/images/mitra1.svg" alt="" width={60} height={60} />
              </div>
              <div className="w-full">
                <Image src="/images/mitra1.svg" alt="" width={60} height={60} />
              </div>
              <div className="w-full">
                <Image src="/images/mitra1.svg" alt="" width={60} height={60} />
              </div>
              <div className="w-full">
                <Image src="/images/mitra1.svg" alt="" width={60} height={60} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* colab end */}

      {/* fiture */}
      <section id="fitur" className="mb-20">
        <div className="text-center flex flex-col mb-5">
          <h3 className="font-serif text-[55px] text-gray-900 leading-snug ">
            Fitur Aplikasi<span className="text-orange-500"> EntShift</span>
          </h3>
          <h1 className="font-sans text-1xl text-gray-950 ">
            EntiShift menyediakan beberapa fitur untuk memudahkan perusahaan
            dalam mengelola performa perusahaan
          </h1>
        </div>

        <div className="container max-w-screen-xl px-8 mx-auto">
          <div className="text-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <FeatureBox
              title="Terintegrasi dengan Payroll"
              img_url="/images/logo-fitur1.svg"
              desc={`Semua data kehadiran, cuti, dan lembur karyawan tersimpan dalam
              cloud yang memenuhi standar keamanan internasional.!`}
            ></FeatureBox>
            <FeatureBox
              title="A"
              img_url="/images/logo-fitur1.svg"
              desc={`GPS (Global Positioning System) memungkinkan perusahaan Anda
                untuk mencatat banyak titik kehadiran setiap karyawan.`}
            ></FeatureBox>
            <FeatureBox
              title="B"
              img_url="/images/logo-fitur1.svg"
              desc={`GPS (Global Positioning System) memungkinkan perusahaan Anda
                untuk mencatat banyak titik kehadiran setiap karyawan.`}
            ></FeatureBox>
            <FeatureBox
              title="C"
              img_url="/images/logo-fitur1.svg"
              desc={`GPS (Global Positioning System) memungkinkan perusahaan Anda
                untuk mencatat banyak titik kehadiran setiap karyawan.`}
            ></FeatureBox>
            <FeatureBox
              title="D"
              img_url="/images/logo-fitur1.svg"
              desc={`GPS (Global Positioning System) memungkinkan perusahaan Anda
                untuk mencatat banyak titik kehadiran setiap karyawan.`}
            ></FeatureBox>
            <FeatureBox
              title="E"
              img_url="/images/logo-fitur1.svg"
              desc={`GPS (Global Positioning System) memungkinkan perusahaan Anda
                untuk mencatat banyak titik kehadiran setiap karyawan.`}
            ></FeatureBox>
          </div>
        </div>
        <div className="flex items-center justify-center pt-20 ">
          <Cta />
        </div>
      </section>
      {/* end fitur */}

      {/*Harga */}
      <section id="harga" className="mb-80">
        <div className=" bg-orange-300 h-96 z-10 ">
          <div className="text-center flex flex-col mb-5"></div>
          <div className="container mx-auto flex justify-center items-center h-max">
            <Pricing2 />
          </div>
        </div>
      </section>

      {/* keuntungan */}
      <section id="#" className="mb-60">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="font-serif text-5xl text-gray-950 leading-snug mb-10">
                Keuntungan Aplikasi EntShip
              </h1>
              <ul className="flex flex-col gap-y-10">
                <li className="flex items-center">
                  <span className="bg-primary rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                    <span className="material-symbols-outlined">rocket</span>
                  </span>
                  <div className="flex flex-col ml-4 leading-5">
                    <h6 className="font-bold mb-1 text-gray-500">Flexsible</h6>
                    <p className="font-[400] text-gray-500">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                    <span className="material-symbols-outlined">
                      data_thresholding
                    </span>
                  </span>
                  <div className="flex flex-col ml-4 leading-5">
                    <h6 className="font-bold mb-1 text-gray-500">
                      Lebih Praktis
                    </h6>
                    <p className="font-[400] text-gray-500">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                    <span className="material-symbols-outlined">
                      watch_screentime
                    </span>
                  </span>
                  <div className="flex flex-col ml-4 leading-5">
                    <h6 className="font-bold mb-1 text-gray-500">
                      Menghemat Waktu Review Kerja
                    </h6>
                    <p className="font-[400] text-gray-500">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-20">
                <div className="w-80 h-80 mx-auto bg-white rounded-lg shadow-xl"></div>
                <div className="absolute w-80 h-80 -bottom-2 rounded-full blur-2xl bg-orange-300 left-1/3 -translate-y-1/4 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end keuntungan */}
    </div>
  );
}
