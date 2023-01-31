import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-16 bg-[#131415] text-white px-4 py-2 flex items-center justify-between drop-shadow-lg">
      <div className="flex items-center gap-2">
        <img src="/vectors/logo.svg" className="w-10" alt="" />
        <p>Userhive</p>
      </div>
      <button className="hidden lg:block bg-[#5e5df0] px-4 py-2 rounded-3xl text-sm hover:bg-white hover:text-[#5e5df0] transition-all duration-500">
        Let's go
      </button>
      <img src="/vectors/menu.svg" className="lg:hidden" alt="" />
    </nav>
  );
};

export default NavBar;
