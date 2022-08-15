import type { NextPage } from "next"
import type { AppProps } from "next/app"
import type { ReactElement, ReactNode } from "react"
import "../styles/globals.css"

type GetLayout = (page: ReactElement) => ReactNode
export type NextPageWithLayout = NextPage & {
  getLayout: GetLayout
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout =
  //   Component.getLayout || ((page: ReactElement) => <Layout>{page}</Layout>);

  // return getLayout(<Component {...pageProps} />);
  return <Component {...pageProps} />
}

export default MyApp
