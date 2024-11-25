import React, { useEffect, useState } from "react";
import api from "./api";
import DarkModeToggle from "../layout/DarkModeToggle";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await api.get("/filter.php?c=Seafood");
        setMenus(response.data.meals.slice(9, 21));
      } catch (error) {
        console.error("Eroare:", error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <>
      <div>
        <DarkModeToggle />
        <h1 className="text-3xl text-center  p-8  font-serif">
          PREPARATELE NOASTRE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mT-10 px-4 md:px-16 lg:px-28 xl:px-40">
          {menus.map((menu) => (
            <div className="  shadow-md overflow-hidden p-4 " key={menu.idMeal}>
              <div className="relative transform transition-transform duration-300 hover:scale-105">
                <img
                  className="w-full h-auto object-cover  "
                  src={menu.strMealThumb}
                  alt={menu.strMeal}
                />
                <div className="absolute bottom-3 w-full bg-black bg-opacity-50  text-white text-lg font-semibold text-center p-2">
                  {menu.strMeal}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Menu;
