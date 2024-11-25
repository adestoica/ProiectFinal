import DarkModeToggle from "../layout/DarkModeToggle";
import { RootLayout } from "../layout/RootLayout";
import HotelReservationForm from "./HotelRezervationForm";

export const Camera1 = () => {
  return (
    <>
      <RootLayout>
        <DarkModeToggle />
        <div>
          <HotelReservationForm />
        </div>
      </RootLayout>
    </>
  );
};
