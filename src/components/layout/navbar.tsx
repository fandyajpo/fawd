import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { IDCHORIZONTAL } from "../svg";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleNavbar = () => {
    setOpen(!open);
  };

  const router = useRouter();
  const {
    query: { id },
  } = router;

  const scroll = (elementID: string) => {
    if (elementID === "/") {
      const element: any = document.getElementById("landing");
      router.push("/", undefined, {
        shallow: true,
        scroll: false,
      });
      return element?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
    router.push(`/#${elementID}`, undefined, {
      shallow: true,
      scroll: false,
    });

    if (router.pathname === "/") {
      const element: any = document.getElementById(elementID);

      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  };

  return (
    <>
      <div className="bg-white/50 shadow shadow-gray200 sticky top-0 z-50 backdrop-blur-sm w-full h-20 flex flex-row items-center justify-between px-4 md:px-8 lg:px-44">
        <div
          className={`bg-black/60 w-full h-screen inset-0 z-10 fixed ${
            open ? "" : "hidden"
          }`}
          onClick={handleNavbar}
        />
        <Link
          href={"/"}
          className="w-16 flex items-center justify-center h-auto"
        >
          <IDCHORIZONTAL />
        </Link>
        <div
          className={`flex flex-col z-10 md:flex-row bg-white md:items-center md:w-2/4 justify-around font-bold absolute md:relative md:h-auto bg-grays md:bg-transparent  left-0 duration-200 md:overflow-hidden md:p-0 top-0  w-full p-4  ${
            open ? "h-44 " : "h-0 scale-0 opacity-0 md:scale-100 md:opacity-100"
          }`}
        >
          <div>
            <button
              onClick={() => scroll("/")}
              className={`w-full md:w-auto duration-75 ${
                router.asPath === "/" && "text-red500"
              }`}
            >
              Home
            </button>
          </div>
          <div>
            <button
              onClick={() => scroll("program")}
              className={`w-full md:w-auto duration-75 ${
                router.asPath === "/#program" && "text-red500"
              }`}
            >
              Program
            </button>
          </div>
          <div>
            <button
              onClick={() => scroll("about")}
              className={`w-full md:w-auto duration-75 ${
                router.asPath === "/#about" && "text-red500"
              }`}
            >
              About Us
            </button>
          </div>
          <div>
            <button
              onClick={() => scroll("team")}
              className={`w-full md:w-auto duration-75 ${
                router.asPath === "/#team" && "text-red500"
              }`}
            >
              Team
            </button>
          </div>
          <div>
            <button
              className={`w-full md:w-auto duration-75 ${
                router.asPath === "/#alumni" && "text-red500"
              }`}
            >
              Alumni
            </button>
          </div>
        </div>
        <div className="w-28 md:w-16 h-auto flex flex-row items-center justify-end">
          <button onClick={handleNavbar} className={"md:hidden"}>
            <div className="bg-red-500 w-10 h-10"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
