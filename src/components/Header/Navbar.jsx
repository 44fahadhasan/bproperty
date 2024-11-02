import React from "react";
import Logo from "../reusable/Logo";
import Menu from "./Menu";
import MenuEnd from "./MenuEnd";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
  return (
    <nav className="text-[#222] relative w-[97%] mx-auto lg:flex lg:items-center lg:justify-between lg:gap-3 py-2">
      {/* menu start */}
      <div class="flex justify-between items-center gap-x-1">
        {/* logo */}
        <Logo />

        {/* toggle button */}
        <ToggleMenu />
      </div>

      <div
        id="hs-header-base"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block "
        aria-labelledby="hs-header-base-collapse"
      >
        <div class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
          <div class="py-2 lg:py-0  flex flex-col lg:flex-row lg:items-center gap-0.5 lg:gap-1">
            {/* menu center */}
            <Menu />

            {/* menu end */}
            <MenuEnd />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
