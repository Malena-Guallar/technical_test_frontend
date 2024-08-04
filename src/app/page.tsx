"use client";

// import { movies as initialMovies } from "@/app/data/movies";
// import Movie from "@/components/Movie/Movie";
// import { useState, useEffect } from "react";

import MovieList from "@/components/MovieList";

const Home = () => {

  return (
    <>
      <h1>Movie Night</h1>
      <MovieList />
    </>
  )
  // const [modal, setModal] = useState<boolean>(true);
  // const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
  //   new Set()
  // );
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  // const [movies, setMovies] = useState<any[]>(initialMovies)

  // const [storedLikes, setStoredLikes] = useState<any>();
  // const [storedDislikes, setStoredDislikes] = useState<any>();

  // useEffect(() => {
  //   const updatedMovies = initialMovies.map((movie) => {
  //     const storedLikes = localStorage.getItem(`${movie.id}-likes`);
  //     setStoredLikes(storedLikes)
  //     const storedDislikes = localStorage.getItem(`${movie.id}-dislikes`);
  //     setStoredDislikes(storedDislikes)
  //     return {
  //       ...movie,
  //       likes: storedLikes !== null ? parseInt(storedLikes, 10) : movie.likes,
  //       dislikes:
  //         storedDislikes !== null
  //           ? parseInt(storedDislikes, 10)
  //           : movie.dislikes,
  //     };
  //   });
  //   setMovies(updatedMovies);
  //   console.log('movies avec likes', updatedMovies)
  // }, [storedLikes, storedDislikes]);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  // const categories = Array.from(new Set(movies.map((movie) => movie.category)));

  // const filterCategories = (category: string) => {
  //   setSelectedCategories((prev) => {
  //     const newCategories = new Set(prev);
  //     if (newCategories.has(category)) {
  //       newCategories.delete(category);
  //     } else {
  //       newCategories.add(category);
  //     }
  //     return newCategories;
  //   });
  // };

  // const filteredMovies = movies.filter(
  //   (movie) =>
  //     selectedCategories.size === 0 || selectedCategories.has(movie.category)
  // );

  // const numberOfPages = Math.ceil(filteredMovies.length / itemsPerPage);

  // const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setItemsPerPage(parseInt(e.target.value, 10));
  //   setCurrentPage(1);
  // };

  // const goToPreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const goToNextPage = () => {
  //   if (currentPage < numberOfPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const paginatedMovies = filteredMovies.slice(startIndex, endIndex);


  // return (
  //   <body>
  //     <main className="flex flex-col">
  //       <div className="flex items-center justify-center p-8">
  //         <h1 className="font-italiana text-6xl lg:text-8xl text-lime-400 tracking-[-.075em]">
  //           Movie night
  //         </h1>
  //       </div>

  //       {modal ? (
  //         <section className="flex justify-center align-middle mt-32">
  //           <button
  //             className="font-italiana text-lime-400 text-2xl lg:text-4xl underline"
  //             onClick={toggleModal}
  //           >
  //             &gt; browse movies
  //           </button>
  //         </section>
  //       ) : (
  //         <section>
  //           <button onClick={toggleModal}>close</button>
  //           <div className="text-lime-400">
  //             <h2>Categories</h2>
  //             <ul>
  //               {categories.map((category) => (
  //                 <li key={category}>
  //                   <button
  //                     type="button"
  //                     onClick={() => filterCategories(category)}
  //                     className={`p-2 rounded ${
  //                       selectedCategories.has(category)
  //                         ? "bg-lime-400 text-white"
  //                         : "bg-gray-200 text-black hover:bg-gray-300"
  //                     }`}
  //                   >
  //                     {category}
  //                   </button>
  //                 </li>
  //               ))}
  //             </ul>

  //             <div className="text-lime-400">
  //               <label htmlFor="itemsPerPage">Items per page</label>
  //               <select
  //                 id="itemsPerPage"
  //                 value={itemsPerPage}
  //                 onChange={handleItemsPerPage}
  //               >
  //                 <option value={4}>4</option>
  //                 <option value={8}>8</option>
  //                 <option value={8}>12</option>
  //               </select>
  //             </div>
  //           </div>

  //           <ul className="lg:grid lg:grid-cols-2 mt-5">
  //             {paginatedMovies.map((movie) => (
  //               <li key={movie.id} className="relative mb-4">
  //                 <Movie {...movie} />
  //               </li>
  //             ))}
  //           </ul>

  //           <div className="text-lime-400">
  //             <button onClick={goToPreviousPage} disabled={currentPage === 1}>
  //               Previous
  //             </button>
  //             <button
  //               onClick={goToNextPage}
  //               disabled={currentPage === numberOfPages}
  //             >
  //               Next
  //             </button>
  //           </div>
  //         </section>
  //       )}
  //     </main>
  //   </body>
  // );
};

export default Home;
