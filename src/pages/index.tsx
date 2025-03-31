import GridItems from "@/component/grid-items";
import MovieItem from "@/component/movie-item";
import SearchableLayout from "@/component/searchable-layout";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-random-movies";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const [allMovies, randomMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: {
      allMovies,
      randomMovies,
    },
  };
};

export default function Home({
  allMovies,
  randomMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <div>
        <h3>지금 가장 추천하는 영화</h3>
        <GridItems gridColumns={3}>
          {randomMovies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </GridItems>
      </div>
      <div>
        <h3>등록된 모든 영화</h3>
        <GridItems gridColumns={5}>
          {allMovies?.map((movie) => (
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
