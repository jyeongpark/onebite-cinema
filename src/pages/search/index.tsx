import SearchableLayout from "@/component/searchable-layout";
import { useRouter } from "next/router";
import movie from "@/mock/dummy.json";
import GridItems from "@/component/grid-items";
import { useEffect, useState } from "react";
import { MovieData } from "@/types";
import MovieItem from "@/component/movie-item";

export default function Search() {
  const router = useRouter();
  const [items, setItems] = useState<MovieData[]>([]);
  const { q } = router.query as { q: string };

  useEffect(() => {
    setItems(movie.filter((el) => el.title.includes(q || "")));
  }, [q]);

  return (
    <div>
      <GridItems gridColumns={3}>
        {items.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}
      </GridItems>
    </div>
  );
}

Search.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
