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
        <button className="rounded-md bg-indigo-500 p-1 text-white text-base  md:text-lg px-2">
          등록하기
        </button>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
