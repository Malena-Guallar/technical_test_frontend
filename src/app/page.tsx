"use client";

import MovieList from "./components/MovieList";
import title from "../../public/images/title.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="bg-green flex flex-col">
      <motion.div initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 0.8 }} className="mx-5 md:mx-0 mt-5 md:mt-10 md:order-last" > 
        <Image src={title} alt="Movie night" layout="responsive" />
      </motion.div>
      <MovieList />
    </section>
  );

  // e1f672
  // 02020

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
