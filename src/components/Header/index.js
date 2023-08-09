import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Cta from "components/cta1";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  // navbar-fixed
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.scrollY > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };
  }

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full items-center z-10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-6 py-6">
            <Image src="logo.svg" alt="" width={144} height={144} />
            {/* <a
              href="home"
              className="font-serif font-bold text-lg text-primary block py-6"
            >
              EntShip
            </a> */}
          </div>

          <bottom
            className={[
              "w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50",
              menu ? "text-black fixed right-1" : "relative text-inherit",
            ].join(" ")}
            onClick={toggleMenu}
          >
            <span class="material-symbols-outlined">
              {menu ? "close" : "menu"}
            </span>
          </bottom>

          <div
            className={[
              "lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20",
              menu
                ? "absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full"
                : "hidden opacity-0 h-0 invisible",
            ].join(" ")}
          >
            <ul className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0">
              <li className="group">
                <Link href="#home" legacyBehavior>
                  <a className="px-9 text-gray-900 group-hover:text-primary">
                    Home
                  </a>
                </Link>
              </li>
              <li className="group">
                <Link href="#fitur" legacyBehavior>
                  <a className="px-9 text-gray-900 group-hover:text-primary">
                    Fitur
                  </a>
                </Link>
              </li>
              <li className="group">
                <Link href="#harga" legacyBehavior>
                  <a className="px-9 text-gray-900 group-hover:text-primary">
                    Harga
                  </a>
                </Link>
              </li>
              <li className="group">
                <Link href="#" legacyBehavior>
                  <a className="px-9 text-gray-900 group-hover:text-primary">
                    Tentang Kami
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={[
              "lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20",
              menu ? "hidden" : "hidden opacity-0 h-0 invisible",
            ].join(" ")}
          >
            <ul className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0">
              <li className="">
                <Cta />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
