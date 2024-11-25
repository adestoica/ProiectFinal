import { RootLayout } from "../layout/RootLayout";
import hotel1 from "../../public/hotel1.jpg";
import Jobs from "./Jobs";
import { Input } from "../components/Input";
import { useState } from "react";
import axios from "axios";

import DarkModeToggle from "../layout/DarkModeToggle";
import { Footer } from "../components/Footer";
export const Cariera = () => {
  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [numarTelefon, setNumarTelefon] = useState("");
  const [studii, setStudii] = useState("");
  const [experienta, setExperienta] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobs = {
      job,
      nume,
      email,
      numarTelefon,
      studii,
      experienta,
    };
    try {
      await axios.post(`http://localhost:3000/jobs`, jobs);
      alert("Datele au fost trimise cu succes!");
    } catch (error) {
      console.error("Eroare", error);
      alert("A intervenit o problema!");
    }
  };

  return (
    <>
      <RootLayout>
        <div
          className=" relative h-1/2 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${hotel1})` }}
        >
          <div className=" absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center  text-white">
            <h1 className="text-5xl  md:text-7xl font-serif text-center  ">
              CARIERA
            </h1>
          </div>
        </div>
        <div>
          <DarkModeToggle />
          <div className="bg-white dark:bg-black">
            <h2 className="text-4xl font-serif text-center  p-10 ">
              Alatura-te echipei noastre!
            </h2>
            <p className="text-center text-2xl font-serif mx-10 lg:mx-60 xl:mx-72  mt-2 pb-2 ">
              Echipa noastră este întotdeauna bucuroasă să primească sprijin!
              Ne-am dori să continuăm să creștem, dar să ne menținem în
              continuare atmosfera de lucru în familie pentru a oferi oaspeților
              noștri un mediu de ședere în care să se simtă confortabil și „ca
              acasă”. Pe lângă bunăstarea oaspeților noștri, acordăm o mare
              importanță celor mai bune condiții de muncă pentru angajații
              noștri. Cooperarea prietenoasă și plăcerea de muncă sunt
              importante pentru noi.
            </p>
          </div>
          <div>
            <h1 className=" text-3xl bg-white dark:bg-black pt-20 font-semibold p-12 font-serif text-center ">
              Posturi disponibile:
            </h1>
            <div className="bg-white dark:bg-black">
              <Jobs img="/jobs/job.jpg" title="CHELNER">
                <div className="flex flex-wrap ">
                  <div className="p-3">
                    <h3 className="font-semibold text-xl">Cerinte:</h3>
                    <ul>
                      <li> - Abilități de comunicare cu clienții</li>
                      <li> - Spirit de echipa.</li>
                      <li> - Cunoasterea limbii engleze, nivel mediu.</li>
                      <li>
                        {" "}
                        - Experienta in domeniu reprezinta un avantaj, dar nu
                        este obligatorie.
                      </li>
                    </ul>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-xl">Beneficii:</h3>
                    <ul>
                      <li> - Program Part-Time</li>
                      <li> - Tips.</li>
                      <li> - Prime de sarbatori.</li>
                      <li> - Vouchere Vacanta.</li>
                      <li> - Bonuri de masa.</li>
                      <li> - Salariu: 4000 lei NET.</li>
                    </ul>
                  </div>
                </div>
              </Jobs>

              <Jobs img="/jobs/job2.jpg" title="COFETAR">
                <div className="flex flex-wrap ">
                  <div className="p-3">
                    <h3 className="font-semibold text-xl">Cerinte:</h3>
                    <ul>
                      <li> - Studiile in domeniu reprezinta un avantaj.</li>
                      <li>
                        {" "}
                        - Mod de lucru fiabil, independent și structurat.
                      </li>
                      <li>
                        {" "}
                        - Abilități excelente de comunicare și spirit de echipă.
                      </li>
                      <li>
                        {" "}
                        - Atenție la detalii și dorința de a oferi produse de
                        calitate superioară.
                      </li>
                      <li> - Experienta in domeniu minim 1 an.</li>
                      <li> - PFA</li>
                    </ul>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-xl">Beneficii:</h3>
                    <ul>
                      <li>Program Full-Time sau Part-Time</li>
                      <li> - Prime de sarbatori.</li>
                      <li> - Vouchere Vacanta.</li>
                      <li> - Bonuri de masa.</li>
                      <li> - Salariu negociat pe baza experientei.</li>
                    </ul>
                  </div>
                </div>
              </Jobs>
            </div>
            <div className="bg-neutral-400 rounded-3xl w-5/6 lg:w-4/6 m-auto mb-9 ">
              <h1 className="text-4xl  font-serif text-center font-bold pt-10 pb-5">
                FORMULAR
              </h1>
              <form
                className="flex flex-col items-center "
                onSubmit={handleSubmit}
              >
                <label className="text-xl block  " htmlFor="job">
                  Postul pentru care aplici
                </label>

                <select
                  id="job"
                  value={job}
                  onChange={(event) => setJob(event.target.value)}
                  className="border-4  w-2/4 rounded-md m-3  hover:border-blue-600 h-10 text-black"
                >
                  <option value="" disabled>
                    Alege
                  </option>
                  <option>Chelner</option>
                  <option>Cofetar</option>
                </select>

                <Input
                  type="text"
                  name="nume"
                  placeholder="Nume si Prenume"
                  value={nume}
                  onChange={(event) => setNume(event.target.value)}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Adresa de email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                  type="number"
                  name="numarTelefon"
                  placeholder="Numar de telefon"
                  value={numarTelefon}
                  onChange={(event) => setNumarTelefon(event.target.value)}
                />
                <label className="text-xl block pl-5 " htmlFor="mesaj">
                  Studii
                </label>
                <textarea
                  name="studii"
                  placeholder="Studii"
                  value={studii}
                  className="p-3 border-2 rounded-md m-3 w-2/4 hover:border-blue-600"
                  onChange={(event) => setStudii(event.target.value)}
                  rows="5"
                />

                <label className="text-xl block pl-5 " htmlFor="experienta">
                  Experienta profesionala
                </label>
                <textarea
                  name="exerienta"
                  placeholder="Experienta"
                  value={experienta}
                  className="p-3 border-2 rounded-md m-3 w-2/4 hover:border-blue-600"
                  onChange={(event) => setExperienta(event.target.value)}
                  rows="5"
                />
                <button
                  className="border-2 rounded-md text-black bg-red-800 w-36 m-6 p-2 hover:bg-green-300"
                  type="submit"
                >
                  Trimite
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </RootLayout>
    </>
  );
};
