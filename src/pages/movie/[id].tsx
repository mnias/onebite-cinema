import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import movie from "@/dummy/dummy.json";
import { MovieData } from "@/types";
import style from "./[id].module.css";

export default function MovieDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  useEffect(() => {
    if (id) {
      const movieIndex = movie.findIndex((item) => item.id === Number(id));

      if (movieIndex !== -1) {
        setMovieData(movie[movieIndex]);
      }
    }
  }, [id]);

  if (movieData) {
    return (
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url('${movieData.posterImgUrl}')` }}
        >
          <img src={movieData.posterImgUrl} />
        </div>
        <div className={style.title}>{movieData.title}</div>
        <div>
          {movieData.releaseDate} / {movieData.genres} /{" "}
          {`${movieData.runtime}분`}
        </div>
        <div>{movieData.company}</div>
        <div className={style.sub_title}>{movieData.subTitle}</div>
        <div className={style.description}>{movieData.description}</div>
      </div>
    );
  }

  return <div>존재하지 않는 영화 입니다.</div>;
}
