import { RootLayout } from "../layout/RootLayout";
import Menu from "./Menu";
import restaurant from "../../public/restaurant.jpg";
import { Footer } from "../components/Footer";

export const Restaurant = () => {
  return (
    <>
      <RootLayout>
        <div
          className=" relative h-screen w-full bg-cover bg-center m-0"
          style={{ backgroundImage: `url(${restaurant})` }}
        >
          <div className=" absolute m-0 h-screen w-screen lg:w-2/5 bg-black bg-opacity-80 flex  flex-col ">
            <h3
              className="text-white text-4xl font-serif pt-52
             text-center"
            >
              RESTAURANT EZRAS
            </h3>
            <h1 className="text-white text-xl font-serif p-24 text-center">
              Restaurantul nostru te asteapta sa incerci cele mai bune preparate
              intr-un loc modern si cu o priveliste minunata!
            </h1>
          </div>
        </div>
        <Menu />
        <Footer />
      </RootLayout>
    </>
  );
};
