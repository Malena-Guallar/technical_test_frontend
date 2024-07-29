import { useState } from "react";
import clsx from "clsx";

const Gauge = ({ likes, dislikes }: { likes: number; dislikes: number }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);
  const [numberOfLikes, setLikes] = useState<number>(likes);
  const [numberOfDislikes, setDislikes] = useState<number>(dislikes);

  const handleLikes = () => {
    if (numberOfLikes === likes) {
      setLikes(numberOfLikes + 1);
      setDisliked(true);
    } else if (numberOfLikes === likes + 1) {
      setLikes(numberOfLikes - 1);
      setDisliked(false);
    }
  };

  const handleDislikes = () => {
    if (numberOfDislikes === dislikes) {
      setDislikes(numberOfDislikes + 1);
      setLiked(true);
    } else if (numberOfDislikes === dislikes + 1) {
      setDislikes(numberOfDislikes - 1);
      setLiked(false);
    }
  };

  return (
    <section className="">
      <button
        className={`min-w-24 rounded-xl rounded-r-none border-2 border-r-0 border-black p-2 ${
          liked
            ? "bg-gray-400 text-black cursor-not-allowed"
            : "text-black hover:bg-lime-400 hover:text-black"
        }`}
        type="button"
        onClick={handleLikes}
        disabled={liked}
      >
        {disliked ? "Liked" : "Like"}
        <br />
        {numberOfLikes}
      </button>
      <button
        className={`min-w-24 rounded-xl rounded-l-none border-2 border-l border-black p-2 ${
          disliked
            ? "bg-gray-400 text-black cursor-not-allowed"
            : "text-black hover:bg-red-500 hover:text-white"
        }`}
        type="button"
        onClick={handleDislikes}
        disabled={disliked}
      >
        {liked  ? "Disliked " : "Dislike "}
        <br />
        {numberOfLikes}      </button>
    </section>
  );
};

export default Gauge;
