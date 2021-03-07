import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header id="header">
      <section className="bg-indigo-800">
        <div className="container mx-auto pt-2.5 pb-2.5">
          <div className="grid grid-cols-1 hidden md:block">
            <DesktopHeader />
          </div>
          <div className="grid grid-cols-1 md:hidden lg:hidden">
            <MobileHeader />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
