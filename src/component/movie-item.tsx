import { MovieData } from "@/types";
import Link from "next/link";
import React from "react";
import style from "./movie-item.module.css";

interface Props {
  movie: MovieData;
}

export default function MovieItem({ movie }: Props) {
  const { id, posterImgUrl } = movie;

  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} alt="" />
    </Link>
  );
}
