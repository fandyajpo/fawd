import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavbar = () => {
    setOpen(!open);
  };

  const router = useRouter();

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
      <div className="bg-white/20 shadow shadow-gray200 sticky top-0 z-50 backdrop-blur-xl w-full h-14 flex flex-row items-center justify-between px-4 md:px-8 lg:px-44">
        <div
          className={`bg-black/60 w-full h-screen inset-0 z-10 fixed ${
            open ? "" : "hidden"
          }`}
          onClick={handleNavbar}
        />
        <Link href={"/"} className="w-24 flex items-center justify-center h-24">
          <p className="font-bold bg p-2 text-white rounded-md bg-blue-500">
            PIK M
          </p>
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
                router.asPath === "/" && "text-blue-500"
              }`}
            >
              Home
            </button>
          </div>
          <div>
            <button
              onClick={() => scroll("program")}
              className={`w-full md:w-auto duration-75 ${
                router.asPath === "/#program" && "text-blue-500"
              }`}
            >
              Program
            </button>
          </div>
          <div>
            <button
              onClick={() => scroll("about")}
              className={`w-full md:w-auto duration-75 ${
                router.asPath === "/#about" && "text-blue-500"
              }`}
            >
              About Us
            </button>
          </div>
          <div>
            <button
              onClick={() => scroll("team")}
              className={`w-full md:w-auto duration-75 ${
                router.asPath === "/#team" && "text-blue-500"
              }`}
            >
              Team
            </button>
          </div>
        </div>
        <div className="w-28 md:w-16 h-auto flex flex-row items-center justify-end">
          <button onClick={handleNavbar} className={"md:hidden"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
