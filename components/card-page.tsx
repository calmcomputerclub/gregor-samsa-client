import { CardType } from "@models/card"
import Input from "./base/Input"

interface Props {
  card?: CardType
  pageType?: "read" | "update"
}

const CardPage = ({ card, pageType = "read" }: Props) => {
  const readOnly = pageType === "read"
  return (
    <div className="px-4">
      <form className="flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <Input value={card ? card.title : ""} readOnly={readOnly} />
        </label>
        <label className="flex flex-col gap-2">
          <textarea
            rows={10}
            className="p-2 rounded-md bg-transparent text-2xl bg-slate-700"
            value={card ? card.content : ""}
            readOnly={readOnly}
          />
        </label>
      </form>
    </div>
  )
}

export default CardPage
