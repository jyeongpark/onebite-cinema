import GridItems from "@/component/grid-items";
import MovieItem from "@/component/movie-item";
import SearchableLayout from "@/component/searchable-layout";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-random-movies";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps = async () => {
  const [allMovies, randomMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: {
      allMovies,
      randomMovies,
    },
    revalidate: 5,
  };
};

export default function Home({
  allMovies,
  randomMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입 시네마</title>
        <meta property="og:title" content="한입 시네마" />
        <meta
          property="og:description"
          content="한입 시네마에서 영화를 살펴보세요"
        />
        <meta property="og:image" content="./thumbnail.png" />
      </Head>
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
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
