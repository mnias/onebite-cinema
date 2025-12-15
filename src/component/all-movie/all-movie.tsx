import { MovieData } from "@/types";
import MovieItem from "../common/movie-item";
import style from "./all-movie.module.css";

export default function AllMovie({ movies }: { movies: MovieData[] }) {
  return (
    <section>
      <div className={style.all_movie_container}>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_movie_list}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
