import clsx from "clsx";
import Gauge from "../Gauge/Gauge";

const Movie = ({
  className,
  id,
  title,
  category,
  likes,
  dislikes,
  ...rest
}: {
  className?: string;
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
}) => {
  return (
      <section
        {...rest}
        className={clsx(
          className,
          "rounded bg-white/90 flex flex-col items-center p-4 gap-3 mx-10"
        )}
      >
        <div className="flex flex-col justify-center text-center">
          <h2 className="uppercase font-bold text-2xl text-center">
            {title}
          </h2>
          <p>{category}</p>
          <Gauge id={id} likes={likes} dislikes={dislikes}/>
        </div>
      </section>
  );
};

export default Movie;
