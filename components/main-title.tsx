import { PAGE_TITLE } from "@libs/constants";

const MainTitle = () => {
  return (
    <header>
      <h1 className="text-5xl text-black dark:text-indigo-500 hidden md:block">
        {PAGE_TITLE}
      </h1>
    </header>
  );
};

export default MainTitle;
