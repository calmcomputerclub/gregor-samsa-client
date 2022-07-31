import { CardType } from "@models/card";

interface Props {
  card?: CardType;
  pageType: "read" | "write" | "update";
}

const CardPage = ({ card, pageType }: Props) => {
  const readOnly = pageType === "read";
  return (
    <div className="px-4">
      <form className="flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <input
            className="py-4 border-b border-indigo-200 bg-transparent text-4xl"
            type="text"
            value={card ? card.title : ""}
            readOnly={readOnly}
          />
        </label>
        <label className="flex flex-col gap-2">
          <textarea
            rows={10}
            className="bg-transparent text-2xl"
            value={card ? card.content : ""}
            readOnly={readOnly}
          />
        </label>
        {pageType === "write" ||
          (pageType === "update" && <input type="submit" />)}
      </form>
    </div>
  );
};

export default CardPage;
