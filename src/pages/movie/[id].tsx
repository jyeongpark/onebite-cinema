import { useRouter } from "next/router";
import movies from "@/mock/dummy.json";
import { useEffect, useState } from "react";
import { MovieData } from "@/types";
import style from "./[id].module.css";

export default function Movie() {
  const router = useRouter();

  const { id } = router.query as { id: string };

  const [item, setItem] = useState<MovieData>();

  useEffect(() => {
    setItem(movies.find((el) => el.id === Number(id)));
  }, [id]);

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url(${item?.posterImgUrl})` }}
      >
        <img src={item?.posterImgUrl} alt="" />
      </div>
      <div className={style.title}>{item?.title}</div>
      <div className={style.releaseDate}>
        {item?.releaseDate} / {item?.genres?.join(", ")} / {item?.runtime}분
      </div>
      <div className={style.company}>{item?.company}</div>
      <br />
      <div className={style.subTitle}>{item?.subTitle}</div>
      <div className={style.description}>{item?.description}</div>
    </div>
  );
}
