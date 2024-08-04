"use client";

import MovieList from "./components/MovieList";

const Home = () => {

  return (
    <section className="">
      <h1 className="font-italiana text-6xl lg:text-8xl text-lime-400 tracking-[-.075em]">Movie Night</h1>
      <MovieList />
    </section>
  )


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
