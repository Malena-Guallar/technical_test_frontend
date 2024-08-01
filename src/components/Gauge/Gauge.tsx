import { useEffect, useState } from "react";
import clsx from "clsx";

const Gauge = ({ id, likes, dislikes }: { id: string; likes: number; dislikes: number }) => {
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

  useEffect(() => {
    localStorage.setItem(`${id}-likes`, numberOfLikes.toString());
    localStorage.setItem(`${id}-dislikes`, numberOfDislikes.toString());
  }, [id, numberOfLikes, numberOfDislikes]);

  return (
    <section className="">
      <button
        className={clsx(
          "min-w-24 rounded-xl rounded-r-none border-2 border-r border-black p-2",
          {
            "bg-white text-black hover:bg-lime-400 hover:text-black": !liked && !disliked,
            "bg-gray-200 border-gray-200 text-gray-500 cursor-not-allowed": !disliked && liked,
            "bg-white text-green-500 border-green-500 hover:bg-lime-400": !liked && disliked,
          }
        )}
        type="button"
        onClick={handleLikes}
        disabled={liked}
      >
        {disliked ? "Liked" : "Like"}
        <br />
        {numberOfLikes}
      </button>
      <button
        className={clsx(
          "min-w-24 rounded-xl rounded-l-none border-2 border-l border-black p-2",
          {
            "bg-white text-black hover:bg-red-500 hover:text-white": !disliked && !liked,
            "bg-gray-200 border-gray-200 text-gray-500 cursor-not-allowed": !liked && disliked,
            "bg-white text-red-500 border-red-500": !disliked && liked,
          }
        )}
        type="button"
        onClick={handleDislikes}
        disabled={disliked}
      >
        {liked ? "Disliked " : "Dislike "}
        <br />
        {numberOfDislikes}{" "}
      </button>
    </section>
  );
};

export default Gauge;
