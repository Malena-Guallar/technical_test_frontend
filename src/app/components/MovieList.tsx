import { useEffect, useState } from "react";
import { movies as moviesData } from "@/app/data/movies";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
}

const MovieList = ({ className } : { className?: string; }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesPerPage, setMoviesPerPage] = useState<number>(4);
  const [likes, setLikes] = useState<{ [id: string]: number }>({});
  const [dislikes, setDislikes] = useState<{ [id: string]: number }>({});
  const [liked, setLiked] = useState<{ [id: string]: boolean }>({});
  const [disliked, setDisliked] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    const fetchMovies = () => {
      const data = Array.from(new Set(moviesData.map((movie) => movie)));
      setMovies(data);
      const categories = Array.from(
        new Set(moviesData.map((movie) => movie.category))
      );
      setCategories(categories);
      const initialLikes: { [id: string]: number } = {};
      const initialDislikes: { [id: string]: number } = {};
      data.forEach((movie) => {
        initialLikes[movie.id] = movie.likes || 0;
        initialDislikes[movie.id] = movie.dislikes || 0;
      });
      setLikes(initialLikes);
      setDislikes(initialDislikes);
    };
    fetchMovies();
  }, []);

  const handleCategoryChange = (selected: string[]) => {
    setSelectedCategories(selected);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleMoviesPerPageChange = (number: number) => {
    setMoviesPerPage(number);
    setCurrentPage(1);
  };

  const handleMovieLike = (id: string) => {
    setLikes((prevLikes) => {
      const currentLikes = prevLikes[id] || 0;
      const newLikes =
        currentLikes === movies.find((movie) => movie.id === id)?.likes
          ? currentLikes + 1
          : currentLikes - 1;

      return {
        ...prevLikes,
        [id]: newLikes,
      };
    });
    setLiked((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  const handleMovieDislike = (id: string) => {
    setDislikes((prevDislikes) => {
      const currentDislikes = prevDislikes[id] || 0;
      const newDislikes =
        currentDislikes === movies.find((movie) => movie.id === id)?.dislikes
          ? currentDislikes + 1
          : currentDislikes - 1;

      return {
        ...prevDislikes,
        [id]: newDislikes,
      };
    });
    setDisliked((prevDislikes) => ({
      ...prevDislikes,
      [id]: !prevDislikes[id],
    }));
  };
  
  const filteredMovies =
  selectedCategories.length > 0
  ? movies.filter((movie) => selectedCategories.includes(movie.category))
  : movies;
  
  const handleMovieDelete = (id: string) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  return (
    <section className="flex flex-col justify-center content-center border-2 border-solid border-pink-300">
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onChange={handleCategoryChange}
      
      />
      <Grid container spacing={3} className="flex flex-wrap justify-center pt-0">
        {currentMovies.map((movie) => (
          <Grid item key={movie.id} className="pt-0">
            <MovieCard
              {...movie}
              likes={likes[movie.id] || 0}
              dislikes={dislikes[movie.id] || 0}
              onToggleLike={() => handleMovieLike(movie.id)}
              onToggleDislike={() => handleMovieDislike(movie.id)}
              liked={liked[movie.id] || false}
              disliked={disliked[movie.id] || false}
              onDeleteMovie={() => handleMovieDelete(movie.id)}
              className="pt-0"
            />
          </Grid>
        ))}
      </Grid>

      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        itemsPerPage={moviesPerPage}
        totalItems={filteredMovies.length}
        onItemsPerPageChange={handleMoviesPerPageChange}
      />
    </section>
  );
};

export default MovieList;
