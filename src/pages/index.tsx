import AllMovie from "@/component/all-movie/all-movie";
import RecommendMovie from "@/component/recommend-movie/recommend-movie";
import SearchableLayout from "@/component/searchable-layout";
import { fetchAllMovies } from "@/lib/fetch-movies";
import { fetchRecommendMovies } from "@/lib/fetch-recomment-movies";
import { InferGetStaticPropsType } from "next";
import { ReactNode } from "react";

export default function Home({
  allMovies,
  recommendMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <RecommendMovie movies={recommendMovies} />
      <AllMovie movies={allMovies} />
    </>
  );
}

export const getStaticProps = async () => {
  // /movie - 모든 영화 불러오기
  // /random - 영화 3개를 불러온다.
  const [allMovies, recommendMovies] = await Promise.all([
    fetchAllMovies(),
    fetchRecommendMovies(),
  ]);

  return {
    props: {
      allMovies,
      recommendMovies,
    },
  };
};

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
