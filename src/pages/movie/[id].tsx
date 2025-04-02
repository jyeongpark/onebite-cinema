import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchOneMovie from "@/lib/fetch-one-movie";
import { useRouter } from "next/router";
import fetchMovies from "@/lib/fetch-movies";
import Head from "next/head";

export const getStaticPaths = async () => {
  const allMovies = await fetchMovies();

  return {
    paths: allMovies?.map((movie) => {
      return { params: { id: String(movie.id) } };
    }),

    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params as { id: string };
  const movieData = await fetchOneMovie(Number(id));

  return {
    props: { movieData },
  };
};

export default function Movie({
  movieData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>한입북스</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입북스" />
          <meta
            property="og:description"
            content="한입 북스에 등록된 책들을 만나보세요"
          />
        </Head>
        <div>로딩 중 입니다</div>
      </>
    );
  }

  if (!movieData) {
    return { notFound: true };
  }

  const {
    title,
    subTitle,
    description,
    releaseDate,
    company,
    genres,
    runtime,
    posterImgUrl,
  } = movieData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={posterImgUrl} />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url(${posterImgUrl})` }}
        >
          <img src={posterImgUrl} alt="" />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.releaseDate}>
          {releaseDate} / {genres?.join(", ")} / {runtime}분
        </div>
        <div className={style.company}>{company}</div>
        <br />
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
