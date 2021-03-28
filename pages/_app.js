import '../styles/global.css'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="mt-6 mb-20">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
