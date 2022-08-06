import WriteForm from "@components/write-form";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";
import { GoArrowLeft } from "react-icons/go";

const WritePage: NextPageWithLayout = () => {
  return (
    <div>
      <WriteForm />
    </div>
  );
};

export default WritePage;

const WritePageLayout = (page: any) => {
  const router = useRouter();
  return (
    <div className="container mx-auto">
      <nav className="flex items-center py-4">
        <button onClick={() => router.back()}>
          <GoArrowLeft
            size={50}
            className="text-indigo-500 hover:text-indigo-300"
          />
        </button>
      </nav>
      <main>{page}</main>
    </div>
  );
};

WritePage.getLayout = WritePageLayout;
