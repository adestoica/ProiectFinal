import { useState } from "react";
import { Navbar } from "../components/navbar";
import DarkModeToggle from "../layout/DarkModeToggle";

export const RootLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-green-950  text-white">
        <div className="flex justify-between items-center py-5 px-4">
          <div className="W-9">
            {" "}
            <img
              src="/public/Logo.jpg"
              className="h-20  ml-4 md:ml-14 rounded-full "
            />
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex gap-7">
            <Navbar path={"/"}>ACASA</Navbar>
            <Navbar path={"/hotel"}>HOTEL</Navbar>
            <Navbar path={"/restaurant"}>RESTAURANT</Navbar>
            <Navbar path={"/cariera"}>CARIERA</Navbar>
          </ul>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col items-center gap-4 py-5">
            <Navbar path={"/"}>ACASA</Navbar>
            <Navbar path={"/hotel"}>HOTEL</Navbar>
            <Navbar path={"/restaurant"}>RESTAURANT</Navbar>
            <Navbar path={"/cariera"}>CARIERA</Navbar>
          </ul>
        )}
      </div>
      <div className="bg-slate-100 h-screen">{children}</div>
    </>
  );
};
