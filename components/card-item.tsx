import { useRouter } from "next/router";

interface Props {
  title: string;
  content: string;
}

const CardItem = ({ title, content }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/card/1");
  };
  return (
    <div className="bg-white p-2 rounded-md" onClick={handleClick}>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default CardItem;
