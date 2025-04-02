import { MovieData } from "@/types";

export default async function fetchOneMovie(
  movieId: number
): Promise<MovieData | null> {
  const url = `https://onebite-cinema-api-ten.vercel.app/movie/${movieId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}
