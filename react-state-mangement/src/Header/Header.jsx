/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between w-full  items-center lg:px-28 px-4 lg:py-6 py-4 bg-white shadow-2xl">
      <div className="text-2xl lg:text-3xl font-serif order-2 lg:order-1 font-bold cursor-pointer">
        <Link to={"/"}>
          react hooks
        </Link>
      </div>
      <div className="flex justify-between order-1 lg:order-2 items-center flex-row-reverse lg:flex-row">
        <div>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <span>
              {open === true ? (
                <XMarkIcon className="h-6  w-6 text-black" />
              ) : (
                <Bars3Icon className="h-6  w-6 text-black" />
              )}
            </span>
          </div>
          <div
            className={`links flex text-black  absolute lg:static duration-500 lg:flex-row flex-col justify-center text-lg ${
              open
                ? "block left-16 top-20 -ml-16 z-20 lg:bg-inherit bg-red-100 w-full lg:text-black text-black shadow-2xl py-5 gap-2 pl-10"
                : "hidden lg:block"
            }`}
          >
            <Link className="font-mono" to="/">
              use state
            </Link>
            <Link className="font-mono" to="/video">
              use effect
            </Link>
            <Link className="font-mono" to="/blogs">
              use reducer
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
