import Navbar from "./navbar";
import Footer from "./footer";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default LayoutProvider;
