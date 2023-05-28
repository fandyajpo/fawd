import { memo } from "react";
import Link from "next/link";
import { INSTAGRAM } from "../svg";
const Footer = memo(() => {
  return (
    <div className="bg-gradient-to-br from-red500 to-darkred flex items-center justify-center mt-24 p-6">
      <div className="md:max-w-2xl lg:max-w-4xl duration-1000 xl:max-w-7xl w-screen flex flex-col gap-y-6 items-stretch grow flex-shrink-0 gap-x-4 md:p-2 py-2 px-6 h-auto ">
        <div className="space-y-2">
          <p className="text-xl text-white font-semibold">Follow Us</p>
          <div>
            <Link
              href={"https://www.instagram.com/instiki.developer.club/"}
              className="flex flex-row items-center gap-2 text-white hover:underline"
            >
              <INSTAGRAM />
              <p>instiki.developer.club</p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-xl text-white">Useful Links</p>
            <div className="space-y-1">
              <p className="text-white">Privacy Policy</p>
              <p className="text-white">Terms of Use</p>
              <p className="text-white">Copyright</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xl text-white">Useful Links</p>
            <div className="space-y-1">
              <p className="text-white">Privacy Policy</p>
              <p className="text-white">Terms of Use</p>
              <p className="text-white">Copyright</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xl text-white">Useful Links</p>
            <div className="space-y-1">
              <p className="text-white">Privacy Policy</p>
              <p className="text-white">Terms of Use</p>
              <p className="text-white">Copyright</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xl text-white">Useful Links</p>
            <div className="space-y-1">
              <p className="text-white">Privacy Policy</p>
              <p className="text-white">Terms of Use</p>
              <p className="text-white">Copyright</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Footer.displayName = "Footer";
export default Footer;
