import Layout from '/src/components/layout'
import '../../style/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
