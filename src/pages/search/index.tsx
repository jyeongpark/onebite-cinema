import SearchableLayout from "@/component/searchable-layout";
import GridItems from "@/component/grid-items";
import MovieItem from "@/component/movie-item";
import fetchMovies from "@/lib/fetch-movies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieData } from "@/types";
import Head from "next/head";

export default function Search() {
  const [data, setData] = useState<MovieData[]>([]);

  const router = useRouter();
  const { q } = router.query as { q: string };

  const searchData = async () => {
    const data = await fetchMovies(q);
    setData(data);
  };

  useEffect(() => {
    searchData();
  }, [q]);

  return (
    <>
      <Head>
        <title>한입 시네마 - 검색결과</title>
        <meta property="og:title" content="한입 시네마 검색 결과" />
        <meta
          property="og:description"
          content="한입 시네마에서 영화를 살펴보세요"
        />
        <meta property="og:image" content="./thumbnail.png" />
      </Head>
      <div>
        <GridItems gridColumns={3}>
          {data?.map((item) => (
            <MovieItem key={item.id} movie={item} />
          ))}
        </GridItems>
      </div>
    </>
  );
}

Search.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
