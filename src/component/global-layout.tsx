import Link from "next/link";
import style from "./global-layout.module.css";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href="/">ONEBITE CINEMA</Link>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
