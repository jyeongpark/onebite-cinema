import { MovieData } from "@/types";

export default async function fetchOneMovie(
  movieId: number
): Promise<MovieData | null> {
  const url = `http://localhost:12345/movie/${movieId}`;

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
