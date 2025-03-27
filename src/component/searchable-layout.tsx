import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

interface Props {
  children: React.ReactNode;
}
export default function SearchableLayout({ children }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const { q } = router.query as { q: string };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!search && q === search) return;
    router.push(`/search?q=${search}`);
  };

  useEffect(() => {
    setSearch(q);
  }, [q]);

  return (
    <div>
      <div className={style.search_container}>
        <input
          value={search}
          onChange={onChangeValue}
          onKeyDown={onKeyDown}
          placeholder="검색어를 입력하세요 ..."
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
