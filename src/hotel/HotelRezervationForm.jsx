import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import { Input } from "../components/Input";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { toast, ToastContainer } from "react-toastify";

const HotelReservationForm = () => {
  const [value, setValue] = useState({ startDate: null, endDate: null });
  const [reservations, setReservations] = useState([]);
  const [nume, setNume] = useState("");
  const [room, setRoom] = useState("");
  const [numberGuests, setNumberGuests] = useState("");
  const [nrTel, setNrTel] = useState("");
  const [editId, setEditId] = useState("");
  const submitButtonLabel = editId ? "ACTUALIZEAZĂ" : "REZERVA";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservationData = {
      startDate: value.startDate,
      endDate: value.endDate,
      nume,
      room,
      nrTel,
      numberGuests,
    };
    try {
      if (editId) {
        await axios.put(
          `http://localhost:3000/reservations/${editId}`,
          reservationData
        );
        alert("Ai editat!");
        setEditId(null); //Reseteaza id-ul dupa modificare
      } else {
        await axios.post("http://localhost:3000/reservations", reservationData);
        alert("Rezervarea a fost creata cu succes!");
      }
      fetchReservations(); // Actualizează lista de rezervări după trimitere
    } catch (error) {
      console.error("Eroare!", error);
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await axios.get("http://localhost:3000/reservations");
      setReservations(response.data);
    } catch (error) {
      console.error("Eoare", error);
    }
  };

  const deleteReservation = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/reservations/${id}`);
      alert("Rezervarea va fii stearsa!");
      fetchReservations(); //Actualizeaza lista
    } catch (error) {
      console.error("Eroare la stergerea rezervarii.", error);
    }
  };

  const editReservation = (reservations) => {
    setNume(reservations.nume);
    setNrTel(reservations.nrTel);
    setRoom(reservations.room);
    setNumberGuests(reservations.numberGuests);
    setValue({
      startDate: reservations.startDate,
      endDate: reservations.endDate,
    });
    setEditId(reservations.id);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className=" p-4 dark:bg-black h-sc">
      <div className="p-4 mt-32 bg-gray-300  w-11/12 text-black m-auto  rounded-lg shadow-md">
        <h2 className="text-2xl font-serif font-bold text-center p-6">
          REZERVA O CAMERA
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mb-4 flex  flex-col md:flex-row  gap-4 "
        >
          <div className="flex-1">
            <Input
              type="text"
              name="nume"
              placeholder="Nume si Prenume"
              value={nume}
              onChange={(event) => setNume(event.target.value)}
              className={classNames("w-full border-2 rounded-md", {
                "bg-white border-black": !editId,
                "bg-yellow-100 border-yellow-500": editId,
              })}
            />
          </div>
          <div className="flex-1">
            <Input
              type="number"
              name="nrTel"
              placeholder="Nr. Telefon"
              value={nrTel}
              onChange={(event) => setNrTel(event.target.value)}
              className={classNames("w-full border-2 rounded-md", {
                "bg-white border-black": !editId,
                "bg-yellow-100 border-yellow-500": editId,
              })}
            />
          </div>

          <div className="flex-1">
            <label className="text-xl block pl-5" htmlFor="room">
              Tip Camera
            </label>

            <select
              id="room"
              value={room}
              onChange={(event) => setRoom(event.target.value)}
              className={classNames(
                "block w-full bg-white border border-gray-500 rounded-md shadow-sm focus:outline-none",
                {
                  "bg-white": !editId,
                  "bg-yellow-100 border-yellow-500": editId,
                }
              )}
            >
              <option value="" disabled>
                Alege
              </option>
              <option>Studio 1</option>
              <option>Studio 2</option>
              <option>Studio 3</option>
              <option>Studio 4</option>
              <option>Studio 5</option>
              <option>Studio 6</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="text-xl block pl-5" htmlFor="guests">
              Nr. persoane
            </label>

            <select
              id="guests"
              value={numberGuests}
              onChange={(event) => setNumberGuests(event.target.value)}
              className={classNames(
                "block w-full bg-white border border-gray-500 rounded-md shadow-sm focus:outline-none",
                {
                  "bg-white": !editId,
                  "bg-yellow-100 border-yellow-500": editId,
                }
              )}
            >
              <option value="" disabled>
                Alege
              </option>
              <option>1 persoana</option>
              <option>2 persoane</option>
              <option>3 persoane</option>
            </select>
          </div>
          <div className="flex-1">
            <label className=" block pl-5" htmlFor="dateRange">
              Check-In & Check-Out
            </label>
            <Datepicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
              showShortcuts={true}
              showClearDates={true}
              minDate={dayjs().startOf("day").toDate()}
              classNames={{
                container: "w-full",
              }}
              format="DD/MM/YYYY"
            />
          </div>
          <div className="flex-1 flex items-end">
            <button
              type="submit"
              className={classNames("font-bold p-4 rounded", {
                "bg-green-500 hover:bg-green-700 text-black": !editId,
                "bg-red-600 hover:bg-red-400 text-white": editId,
              })}
            >
              {submitButtonLabel}{" "}
            </button>
          </div>
        </form>
        <div>
          <h2 className="text-2xl font-semibold p-3 text-center">
            REZERVARILE TALE
          </h2>
          <div className="bg-gray-400 text-xl lg:text-2xl w-3/6 m-auto flex justify-center gap-8 rounded-lg p-5 my-10 ">
            {reservations.map((reservation) => (
              <div
                key={reservation.id}
                className="mb-2   items-start flex flex-col"
              >
                <p>Nume: {reservation.nume}</p>
                <p>Nr. Telefon: {reservation.nrTel}</p>
                <p>Tip Camera: {reservation.room}</p>
                <p>Nr. persoane: {reservation.numberGuests}</p>
                <p>
                  Check-In: {dayjs(reservation.startDate).format("DD/MM/YYYY")}{" "}
                </p>
                <p>
                  Check-Out: {dayjs(reservation.endDate).format("DD/MM/YYYY")}
                </p>

                <Link to={`/reservations/${reservation.id}`}></Link>
                <div className="flex flex-wrap  gap-5 mt-8">
                  <button
                    className="mb-9 "
                    onClick={() => deleteReservation(reservation.id)}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="size-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                  <button
                    className="text-blue-800  mb-9"
                    onClick={() => editReservation(reservation)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-9"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelReservationForm;
