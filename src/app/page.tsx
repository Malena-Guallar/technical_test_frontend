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
}
export default Home;
