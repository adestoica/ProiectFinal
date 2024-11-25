import React, { useState } from "react";
import { Footer } from "../components/Footer";

const reviews = [
  {
    id: 1,
    name: "Ana Iosif",
    rating: 5,
    comment:
      "Camera a fost foarte curata, mancarea de la restaurant delicioasa. Mi-au recomandat si ce locuri pot vizita in zona. Recomand!",
  },
  {
    id: 2,
    name: "Pop Maria",
    rating: 2,
    comment:
      "Nu am putut plati cu cardul, ceea ce m-a facut sa pierd timp pentru a gasi o solutie. Receptionera nepoliticoasa.",
  },
  {
    id: 3,
    name: "Amalia Istom",
    rating: 3,
    comment:
      "Personalul foarte prietenos, dar am asteptat mai mult de 40 minute pentru mancare. Cu toate acestea, mancarea a fost delicioasa.",
  },
  {
    id: 4,
    name: "Zack Rucors",
    rating: 1,
    comment:
      "Fata de la receptie a fost foarte nepoliticoasa. Am avut o problema si am ajuns dupa ora de check-in,  mi-a perceput o taxa pentru intarziere.",
  },
  {
    id: 5,
    name: "Charlie Adams",
    rating: 5,
    comment:
      "Totul a fost perfect! De la camera, la restaurant, totul a fost la superlativ. O sa mai revin cu drag!",
  },
  {
    id: 6,
    name: "Charlie Adams",
    rating: 4,
    comment:
      "Privelistea superba. Personalul prietenos. Drumul de acces insa e foarte prost. In rest totul ok.",
  },
];

export const Recenzii = () => {
  const [sortedReviews, setSortedReviews] = useState(reviews);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    let sorted;
    if (value === "asc") {
      sorted = [...sortedReviews].sort((a, b) => a.rating - b.rating);
    } else if (value === "desc") {
      sorted = [...sortedReviews].sort((a, b) => b.rating - a.rating);
    }
    setSortedReviews(sorted);
  };

  return (
    <>
      <div className="p-6  h-5/6 text-white font-sans">
        <h1 className="text-4xl text-center p-6 font-bold mb-4">RECENZII</h1>
        <div className="mb-8 ml-11">
          <select
            value={selectedOption}
            onChange={handleSortChange}
            className="bg-green-700 text-white py-2 text-center   rounded"
          >
            <option value="" disabled>
              SORTEAZA
            </option>
            <option value="desc">Cel mai mare scor</option>
            <option value="asc">Cel mai mic scor</option>
          </select>
        </div>
        <ul className=" m-auto  grid grid-cols-1 xl:grid-cols-2  ">
          {sortedReviews.map((review) => (
            <li
              key={review.id}
              className="border p-4 mb-4 rounded shadow bg-white text-black w-11/12  m-auto"
            >
              {" "}
              <p className="text-gray-800 font-semibold text-xl">
                Rating: {review.rating}
              </p>
              <h2 className="">{review.name}</h2>{" "}
              <p className="text-2xl">{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
