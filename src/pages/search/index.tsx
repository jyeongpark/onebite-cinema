import SearchableLayout from "@/component/searchable-layout";
import GridItems from "@/component/grid-items";
import MovieItem from "@/component/movie-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchMovies from "@/lib/fetch-movies";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { q } = context.query as { q: string };

  const searchData = await fetchMovies(q);

  return {
    props: {
      searchData,
    },
  };
};
export default function Search({
  searchData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <GridItems gridColumns={3}>
        {searchData?.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}
      </GridItems>
    </div>
  );
}

Search.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
