import DarkModeToggle from "../layout/DarkModeToggle";

export const Footer = () => {
  return (
    <>
      <div className=" pt-9 gap-3 flex flex-col  md:flex-row justify-around text-center bg-gray-500 dark:bg-gray-900">
        <div className="flex flex-col">
          <p className="text-xl">CONTACT</p>
          <p>Hotel Ezras GmbH & Co. KG</p>
          <p>Str. Poienii, Brasov</p>
          <p>Tel. : 0234567890</p>
          <p>E-Mail : hotelEzras@gmail.com</p>
        </div>
        <div>
          <p className="text-xl">PROGRAM HOTEL</p>
          <p>Check-In: 15:00</p>
          <p>Check- Out: 11:00</p>
        </div>
        <div>
          <p className="text-xl">PROGRAM RESTAURANT</p>
          <p>L-Ma: INCHIS</p>
          <p>Mi-Vi: 15:00- 21:00</p>
          <p>S-D: 10:00-23:00</p>
        </div>
      </div>
    </>
  );
};
