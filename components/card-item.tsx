import Link from "next/link"

interface Props {
  id: string
  title: string
  content: string
}

const CardItem = ({ title, content, id }: Props) => {
  return (
    <Link href={`/samsa/${id}`}>
      <div className="bg-white p-2 rounded-md hover:bg-indigo-100 cursor-pointer">
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </Link>
  )
}

export default CardItem
