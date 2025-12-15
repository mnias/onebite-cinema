import style from "./[id].module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchOneMovie from "@/lib/fetch-one-movie";

export default function MovieDetailPage({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!movie) {
    return <div>영화를 불러오지 못했습니다.</div>;
  }

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${movie.posterImgUrl}')` }}
      >
        <img src={movie.posterImgUrl} />
      </div>
      <div className={style.title}>{movie.title}</div>
      <div>
        {movie.releaseDate} / {movie.genres} / {`${movie.runtime}분`}
      </div>
      <div>{movie.company}</div>
      <div className={style.sub_title}>{movie.subTitle}</div>
      <div className={style.description}>{movie.description}</div>
    </div>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;

  const movie = await fetchOneMovie(Number(id));

  return {
    props: {
      movie,
    },
  };
};
