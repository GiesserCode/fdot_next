'use client'
import {useEffect, useState} from "react";
import {dropdown, links, navbar} from "@/app/components/text";
import {blackOpsOne} from "@/app/ui/fonts";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setisDropdownOpen] = useState(-1);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("test")
  };

  const calc = (index: number) => {
    return document.querySelector(`#dropdown-${index}`)?.scrollHeight;
  };

  useEffect(() => {
    // Update window width when component mounts
    setWindowWidth(window.innerWidth);

    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`snap-start w-full fixed h-16 max-lg:h-screen max-lg:z-40 selection:bg-zinc-200 selection:text-zinc-900 ${blackOpsOne.className} antialiased z-50 ${
        isMenuOpen ? "max-lg:pointer-events-auto" : "max-lg:pointer-events-none"
      }`}
    >
      <div className="lg:hidden bg-zinc-950 h-16 z-50">
        <div className="h-full w-16 grid place-items-center pointer-events-auto">
          <svg
            className="h-14"
            width="51.2"
            height="64"
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M140 40C84.7715 40 40 84.7715 40 140L40 440C40 451.046 48.9543 460 60 460H80C91.0457 460 100 451.046 100 440V180C100 135.817 135.817 100 180 100H340C351.046 100 360 91.0457 360 80V60C360 48.9543 351.046 40 340 40H140ZM140 460C140 482.091 122.091 500 100 500H40C17.9086 500 0 482.091 0 460V140C0 62.6801 62.6801 0 140 0H360C382.092 0 400 17.9086 400 40V100C400 122.091 382.092 140 360 140H180C157.909 140 140 157.909 140 180V460ZM180 239.76C163.568 252.57 153 272.551 153 295C153 317.449 163.568 337.43 180 350.24C191.866 359.49 206.789 365 223 365C261.66 365 293 333.66 293 295C293 256.34 261.66 225 223 225C206.789 225 191.866 230.51 180 239.76ZM223 325C239.569 325 253 311.569 253 295C253 278.431 239.569 265 223 265C206.431 265 193 278.431 193 295C193 311.569 206.431 325 223 325Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="pointer-events-auto">
          <label
            className="block w-14 h-14 m2 cursor-pointer absolute right-0 top-3 z-50"
            onClick={toggleMenu}
          >
            <span className="block w-10 h-1 bg-white absolute top-1 left-0"></span>
            <span className="block w-10 h-1 bg-white absolute top-4 left-0"></span>
            <span className="block w-10 h-1 bg-white absolute top-7 left-0"></span>
          </label>
        </div>
      </div>
      <div
        className={`w-full h-full bg-zinc-950 transition ease-in-out duration-700 flex  max-lg:h-full max-lg:overflow-y-scroll max-lg:z-50 ${
          isMenuOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"
        }`}
      >
        <ul className="w-full h-full m-0 p-0 flex items-center max-lg:block max-lg:text-center max-lg:h-min max-lg:z-10">
          {navbar.map((item, index) => {
            return (
              <li
                key={item} onClick={toggleMenu}
                className={`max-lg:relative h-full min-w-[120px] transition ease-in-out duration-500 grid place-items-center max-lg:w-full mx-2`}
              >
                <Link
                  href={`#${dropdown[index] === null ? links[index] : ""}`}
                  id={`nav-item-${index}`}
                  className={`peer no-underline transition ease-in-out duration-500 text-white w-full h-full grid place-items-center z-30 bg-zinc-950 max-lg:h-24 outline-none hover:bg-normalBG rounded-xl`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
          <div className="max-lg:hidden z-20 w-screen h-16 bg-zinc-950"></div>
        </ul>
        <svg
          className="absolute right-0 h-16 z-30 p-1 bg-zinc-950 max-lg:hidden"
          width="51.2"
          height="64"
          viewBox="0 0 400 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M140 40C84.7715 40 40 84.7715 40 140L40 440C40 451.046 48.9543 460 60 460H80C91.0457 460 100 451.046 100 440V180C100 135.817 135.817 100 180 100H340C351.046 100 360 91.0457 360 80V60C360 48.9543 351.046 40 340 40H140ZM140 460C140 482.091 122.091 500 100 500H40C17.9086 500 0 482.091 0 460V140C0 62.6801 62.6801 0 140 0H360C382.092 0 400 17.9086 400 40V100C400 122.091 382.092 140 360 140H180C157.909 140 140 157.909 140 180V460ZM180 239.76C163.568 252.57 153 272.551 153 295C153 317.449 163.568 337.43 180 350.24C191.866 359.49 206.789 365 223 365C261.66 365 293 333.66 293 295C293 256.34 261.66 225 223 225C206.789 225 191.866 230.51 180 239.76ZM223 325C239.569 325 253 311.569 253 295C253 278.431 239.569 265 223 265C206.431 265 193 278.431 193 295C193 311.569 206.431 325 223 325Z"
            fill="white"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
