import SearchableLayout from "@/component/searchable-layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import movie from "@/dummy/dummy.json";
import { MovieData } from "@/types";
import MovieItem from "@/component/common/movie-item";
import style from "./search.module.css";

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [searchedMovies, setSearchedMovies] = React.useState<MovieData[]>([]);

  useEffect(() => {
    if (q) {
      const filteredMovies = movie.filter((m) =>
        m.title.toLowerCase().includes((q as string).toLowerCase())
      );
      setSearchedMovies(filteredMovies);
    }
  }, [q]);

  return (
    <section>
      <div className={style.search_container}>
        {searchedMovies.map((movie) => {
          return <MovieItem key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
