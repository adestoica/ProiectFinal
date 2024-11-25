import "../src/index.css";
import { RootLayout } from "./layout/RootLayout";
import hotel from "../public/hotel.jpg";
import { Location } from "./paginaPrincipala/Location";

import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer";
import { useState } from "react";
import DarkModeToggle from "./layout/DarkModeToggle";
import { Recenzii } from "./recenzii/Recenzii";

export default function App() {
  const [darkMode, setDarkMode] = useState("");
  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <RootLayout>
        <div
          className=" relative h-screen w-full md:w-screen md:h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${hotel})` }}
        >
          <div className=" absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center flex-wrap">
            <h1 className="text-white  text-8xl sm:text-9xl md:text-9xl font-serif p-20">
              EZRAS
            </h1>
            <h3 className="text-white font-serif ">HOTEL & RESTAURANT</h3>
          </div>
        </div>
        <div className={`${darkMode && "dark"}`}>
          <DarkModeToggle />
          <div className="bg-white dark:bg-black">
            <Location></Location>
          </div>

          <Recenzii />
        </div>

        <Footer />
      </RootLayout>
    </>
  );
}
