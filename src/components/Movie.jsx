import React from "react";
import { motion } from "framer-motion";

const Movie = (props) => {
  const { title, backdrop_path: imgSrc } = props.movie;
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w400${imgSrc}`} alt="" />
    </motion.div>
  );
};

export default Movie;
