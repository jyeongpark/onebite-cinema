import Link from "next/link";
import React from "react";
import style from "./global-layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function GlobalLayout({ children }: Props) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href="/">ONEBITE CINEMA</Link>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
