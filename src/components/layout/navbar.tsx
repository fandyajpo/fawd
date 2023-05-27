import { memo } from "react";

const Navbar = memo(() => {
  return (
    <div className="p-4 sticky top-0 bg-transparent">
      <div className="bg-red500 w-full h-16 rounded-full"></div>
    </div>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
