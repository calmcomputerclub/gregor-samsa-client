import Button from "@components/base/Button"
import CardSection from "@components/card-section"
import Layout from "@components/layout"
import type { StatusType } from "@models/status"
import Link from "next/link"

const statuses: StatusType[] = ["등록", "처리중", "해결", "보류"]

const HomePage = () => {
  return (
    <Layout
      navButton={
        <Link href="/write">
          <Button>등록하기</Button>
        </Link>
      }
    >
      <div className="p-3">
        <div className="grid gap-4 lg:grid-cols-4">
          {statuses.map((status) => (
            <CardSection key={status} status={status} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
