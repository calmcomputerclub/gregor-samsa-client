import { PAGE_TITLE } from "@libs/constants"
import Link from "next/link"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  navButton?: ReactNode
}

const Layout = ({ children, navButton }: Props) => {
  return (
    <div className="container mx-auto">
      <nav className="mx-auto flex justify-between items-center border-b border-indigo-600 p-2">
        <header className="flex-1">
          <h1 className="text-5xl text-black dark:text-indigo-500 hidden md:block">
            <Link href="/">{PAGE_TITLE}</Link>
          </h1>
        </header>
        {navButton && navButton}
      </nav>
      <main className="pt-4">{children}</main>
    </div>
  )
}

export default Layout
