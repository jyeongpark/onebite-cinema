import SearchableLayout from "@/component/searchable-layout";
import GridItems from "@/component/grid-items";
import MovieItem from "@/component/movie-item";
import fetchMovies from "@/lib/fetch-movies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieData } from "@/types";

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
    <div>
      <GridItems gridColumns={3}>
        {data?.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}
      </GridItems>
    </div>
  );
}

Search.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
