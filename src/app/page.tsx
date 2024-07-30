"use client";

import { movies } from "@/app/data/movies";
import Movie from "@/components/Movie/Movie";
import { useState } from "react";

const Home = () => {
  const [modal, setModal] = useState<boolean>(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <body>
      <main className="flex flex-col">
        <div className="flex items-center justify-center p-8">
          <h1 className="font-italiana text-2xl lg:text-8xl text-lime-400">
            Movie night
          </h1>
        </div>

        {modal ? (
          <section className="flex justify-center align-middle">
            <button onClick={toggleModal}> browse movies</button>
          </section>
        ) : (
          <section className="">
            <button onClick={toggleModal}>close</button>
            <ul className="lg:grid lg:grid-cols-2 mt-5">
              {movies.map((movie, index) => (
                <li key={index} className="relative mb-4">
                  <Movie {...movie} id={`movie-${index}`} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </body>
  );
};

export default Home;
