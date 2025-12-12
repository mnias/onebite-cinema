import AllMovie from "@/component/all-movie/all-movie";
import RecommendMovie from "@/component/recommend-movie/recommend-movie";
import SearchableLayout from "@/component/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <RecommendMovie />
      <AllMovie />
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
