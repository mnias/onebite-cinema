import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchOneMovie from "@/lib/fetch-one-movie";
import { useRouter } from "next/router";

export default function MovieDetailPage({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>로딩 중입니다.</div>;
  }

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

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
      { params: { id: "11" } },
      { params: { id: "12" } },
      { params: { id: "13" } },
      { params: { id: "14" } },
      { params: { id: "15" } },
      { params: { id: "16" } },
      { params: { id: "17" } },
      { params: { id: "18" } },
    ],
    fallback: true,
    // false: 404 Not found
    // blocking: SSR 방식
    // true: SSR 방식 + 데이터가 없는 폴백 상태의 페이지부터 반환
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;

  const movie = await fetchOneMovie(Number(id));

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
  };
};
