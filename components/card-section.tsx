import type { StatusType } from "@models/status"
import CardItem from "./card-item"

interface Props {
  status: StatusType
}

const CardSection = ({ status }: Props) => {
  return (
    <section className="bg-gray-200 lg:h-[80vh] p-4 rounded-md dark:text-black dark:bg-slate-600">
      <h2 className="mb-2 text-xl font-bold dark:text-white">{status}</h2>
      <div className="flex flex-col gap-2">
        <CardItem id="1" title="Title" content="Content" />
        <CardItem id="2" title="Title" content="Content" />
        <CardItem id="3" title="Title" content="Content" />
      </div>
    </section>
  )
}

export default CardSection
