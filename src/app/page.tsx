"use client";

import {movies} from "@/app/data/movies";
import Movie from "@/components/Movie/Movie";
import Image from "next/image";

const Home = () => {

  return (
    <body>
      <main className="flex flex-col">
        <div className="bg-yellow-200 flex items-center justify-center p-8">
          <Image src="/images/chip.svg" alt="" width={50} height={50} aria-hidden="true"/>
          <h1 className="uppercase font-bold text-2xl lg:text-4xl p-3">
            Movie night
          </h1>
        </div>
        <div className="bg-lime-300">
          <ul className="lg:grid lg:grid-cols-2 mt-5">
            {movies.map((movie, index) => (
              <li key={index} className="relative mb-4">
                <Movie {...movie} id={`movie-${index}`} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </body>
  );
};

export default Home;
