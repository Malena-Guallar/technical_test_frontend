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
        className={`rounded p-1 mx-4 ${
          liked
            ? "bg-gray-400 text-black cursor-not-allowed"
            : "bg-yellow-200 text-black hover:bg-black hover:text-yellow-200"
        }`}
        type="button"
        onClick={handleLikes}
        disabled={liked}
      >
        {disliked ? "Liked" : "Like"}
      </button>
      <button
        className={`rounded p-1 mx-4 ${
          disliked
            ? "bg-gray-400 text-black cursor-not-allowed"
            : "bg-yellow-200 text-black hover:bg-black hover:text-yellow-200"
        }`}
        type="button"
        onClick={handleDislikes}
        disabled={disliked}
      >
        {liked ? "Disliked" : "Dislike"}
      </button>
      <br />
      <p>Likes: {numberOfLikes}</p>
      <p>Dislikes: {numberOfDislikes}</p>
    </section>
  );
};

export default Gauge;
