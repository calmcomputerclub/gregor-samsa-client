import Button from "@components/base/Button"
import CardPage from "@components/card-page"
import Layout from "@components/layout"
import { useState } from "react"

const data = {
  id: "1",
  title: "This is title",
  content: "This is content",
}

interface Props {
  data: any
}

export default function DetailPage({ data }: Props) {
  const [] = useState()

  const handleClickButton = () => {
    alert("수정하기")
  }

  return (
    <Layout navButton={<Button onClick={handleClickButton}>수정하기</Button>}>
      <CardPage
        pageType="update"
        card={{
          content: "Hello",
          title: "title",
        }}
      />
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      samsa: data,
    },
  }
}
