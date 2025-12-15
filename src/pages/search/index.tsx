import SearchableLayout from "@/component/searchable-layout";
import React from "react";
import MovieItem from "@/component/common/movie-item";
import style from "./search.module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchAllMovies } from "@/lib/fetch-movies";

export default function SearchPage({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section>
      <div className={style.search_container}>
        {movies.map((movie) => {
          return <MovieItem key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q || "";

  const movies = await fetchAllMovies(q as string);

  return {
    props: {
      movies,
    },
  };
};

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
