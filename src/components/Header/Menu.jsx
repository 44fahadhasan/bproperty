import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { menuData } from "../../data/data";

const Menu = () => {
  return (
    <div className="grow">
      <div className="flex flex-col lg:flex-row lg:items-center gap-0.5 lg:gap-1">
        {menuData?.map((item, index) => (
          <React.Fragment key={index}>
            {/* dropdown menu */}
            {item?.dropdown ? (
              <div className="hs-dropdown [--strategy:static] lg:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] lg:[--is-collapse:false]">
                <button
                  id={`dropdown-button-${index}`}
                  type="button"
                  className="hs-dropdown-toggle w-full p-2 flex items-center justify-between text-sm hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 font-bold"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  {item?.label}
                  <IoIosArrowDown />
                </button>
                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] lg:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full lg:w-72 hidden z-10 top-full ps-7 lg:ps-0 lg:bg-white lg:rounded-lg lg:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 lg:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100"
                  role="menu"
                >
                  {item?.dropdown?.map((dropdownItem, subIndex) => (
                    <Link
                      key={subIndex}
                      className="p-2 lg:px-3 flex items-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      to={dropdownItem?.link}
                    >
                      {dropdownItem?.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              // wtihout dropdown menu
              <Link
                className="p-2 flex items-center text-sm hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 font-bold"
                to={item?.link}
              >
                {item?.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Menu;
