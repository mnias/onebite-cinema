import movie from "@/dummy/dummy.json";
import style from "./recommend-movie.module.css";
import MovieItem from "../common/movie-item";

export default function RecommendMovie() {
  return (
    <section>
      <div className={style.recommend_movie_container}>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommend_movie_list}>
          {movie.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
