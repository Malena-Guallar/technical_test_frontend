"use client";

import { movies } from "@/app/data/movies";
import Movie from "@/components/Movie/Movie";
import { useState } from "react";

const Home = () => {
  const [modal, setModal] = useState<boolean>(true);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );

  const toggleModal = () => {
    setModal(!modal);
  };

  const categories = Array.from(new Set(movies.map((movie) => movie.category)));

  const filterCategories = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = new Set(prev);
      if (newCategories.has(category)) {
        newCategories.delete(category);
      } else {
        newCategories.add(category);
      }
      return newCategories;
    });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      selectedCategories.size === 0 || selectedCategories.has(movie.category)
  );

  return (
    <body>
      <main className="flex flex-col">
        <div className="flex items-center justify-center p-8">
          <h1 className="font-italiana text-6xl lg:text-8xl text-lime-400 tracking-[-.075em]">
            Movie night
          </h1>
        </div>

        {modal ? (
          <section className="flex justify-center align-middle mt-32">
            <button
              className="font-italiana text-lime-400 text-2xl lg:text-4xl"
              onClick={toggleModal}
            >
              &gt; browse movies
            </button>
          </section>
        ) : (
          <section>
            <button onClick={toggleModal}>close</button>
            <div className="text-lime-400">
              <h2>Categories</h2>
              <ul>
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => filterCategories(category)}
                      className={`p-2 rounded ${
                        selectedCategories.has(category)
                          ? "bg-lime-400 text-white"
                          : "bg-gray-200 text-black hover:bg-gray-300"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="lg:grid lg:grid-cols-2 mt-5">
              {filteredMovies.map((movie, index) => (
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
