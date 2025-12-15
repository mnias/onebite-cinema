import style from "./recommend-movie.module.css";
import MovieItem from "../common/movie-item";
import { MovieData } from "@/types";

export default function RecommendMovie({ movies }: { movies: MovieData[] }) {
  return (
    <section>
      <div className={style.recommend_movie_container}>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommend_movie_list}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
