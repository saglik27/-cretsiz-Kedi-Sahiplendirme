import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="istiyorsanız? Güvenlik ayarlarınıza bir göz atın: Katılımsız erişim için bir parola ve iki faktörlü kimlik doğrulama ayarlayabilirsiniz . Bu şekilde, oturumun uzak taraf tarafından manuel olarak kabul edilmesi gerekmez." />
        <p className="description">
          Get started by editihhhng <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
