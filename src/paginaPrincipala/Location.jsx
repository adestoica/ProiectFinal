import SimpleMarker from "./SimpleMarker";
import imageBrasov from "/imageBrasov.jpeg";
import turnulAlb from "/turnulAlb.jpg";

export const Location = () => {
  return (
    <>
      <div>
        <div className="  w-3/6 m-auto ">
          <h1 className=" text-5xl pt-9 font-semibold text-center ">
            Unde ne gasesti?
          </h1>
          <SimpleMarker />
        </div>

        <div className="  m-auto text-center flex justify-center flex-col sm:flex-col md:flex-row gap-5 md:gap-40 text-2xl ">
          <div>
            <h2 className="font-semibold  text-4xl">Adresa noastra:</h2>
            <p>Calea Poienii, Brasov, Romania</p>
          </div>
          <div>
            <h2 className="font-semibold  text-4xl">Coordonate GPS:</h2>
            <p className="text-xl">Latitudine: 45.6430549621582</p>
            <p className="text-xl">Longitudine:25.586000442504883</p>
          </div>
        </div>
        <p className=" text-white mt-6 text-center text-2xl font-semibold ">
          Suntem chiar langa Turnul Alb si Piata Sfatului din Brasov!
        </p>
        <div className="flex items-center flex-col md:flex-row justify-center md:gap-24 py-10">
          <img
            className=" relative h-96 w-96 xl:h-1/9 bg-cover  border-2 border-black "
            style={{ backgroundImage: `url(${turnulAlb})` }}
          />
          <img
            className=" relative h-96 w-96 sm:3/4 bg-cover  border-2 border-black "
            style={{ backgroundImage: `url(${imageBrasov})` }}
          />
        </div>
      </div>
    </>
  );
};
