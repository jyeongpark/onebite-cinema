import GridItems from "@/component/grid-items";
import MovieItem from "@/component/movie-item";
import SearchableLayout from "@/component/searchable-layout";
import movies from "@/mock/dummy.json";

export default function Home() {
  return (
    <div>
      <div>
        <h3>지금 가장 추천하는 영화</h3>
        <GridItems gridColumns={3}>
          {movies.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </GridItems>
      </div>
      <div>
        <h3>등록된 모든 영화</h3>
        <GridItems gridColumns={5}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </GridItems>
      </div>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
