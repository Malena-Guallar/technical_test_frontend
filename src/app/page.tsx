"use client";

import MovieList from "./components/MovieList";
import title from "../../public/images/title.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Icon } from "@mui/material";

const Home = () => {
  return (
    <section className="bg-white flex flex-col">
      <div className="hidden md:flex justify-between mx-8">
        <Icon className="mt-3" aria-hidden="true">
          <HomeOutlinedIcon fontSize="medium" />
        </Icon>
        <Icon className="mt-3" aria-hidden="true">
          <ArrowOutwardIcon fontSize="medium" />
        </Icon>
      </div>
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="mx-5 md:mx-0 mt-5 md:mt-10 md:order-last"
      >
        <Image
          src={title}
          alt="Movie night"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </motion.div>
      <MovieList />
    </section>
  );
};
export default Home;
