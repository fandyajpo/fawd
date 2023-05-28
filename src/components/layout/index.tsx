import Navbar from "./navbar";
import Footer from "./footer";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(() => import("./navbar"), {
  ssr: false,
  loading: () => (
    <div className="bg-white/50 shadow shadow-gray200 sticky top-0 z-50 backdrop-blur-sm w-full h-20 flex flex-row items-center justify-between px-4 md:px-8 lg:px-44"></div>
  ),
});

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DynamicNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutProvider;
