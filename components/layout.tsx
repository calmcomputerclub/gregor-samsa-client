import Link from "next/link";
import type { ReactNode } from "react";
import MainTitle from "./main-title";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto">
      <nav className="mx-auto flex justify-between items-center border-b border-indigo-600 p-2">
        <MainTitle />
        <Link href="/write">
          <button className="rounded-md bg-indigo-500 hover:bg-indigo-300 p-1 text-white text-base  md:text-lg px-2">
            등록하기
          </button>
        </Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
