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
        <Header title="Anydesk nedir - ne işe yarar - anydesk dosya aktarımı" />
        <p className="description">
          Başlamak için AnyDesk'i açın. Solda gördüğünüz numara kişisel kimliğinizdir. Kişiler cihazınıza erişmek için bu numarayı kullanabilir ve bu numaraya bağlanmak istediğiniz kişiden ihtiyacınız vardır. Sağdaki arama çubuğuna uzak cihazın kimliğini yazın. Unutmayın: Tanımadığınız hiç kimsenin cihazınıza erişmesine izin vermeyin ve çevrimiçi dolandırıcılara karşı dikkatli olun !

Ya evdeyseniz, ancak oturum isteğini kabul edecek kimsenin olmadığı ofiste iş bilgisayarınıza gözetimsiz olarak erişmek istiyorsanız? Güvenlik ayarlarınıza bir göz atın: Katılımsız erişim için bir parola ve iki faktörlü kimlik doğrulama ayarlayabilirsiniz . Bu şekilde, oturumun uzak taraf tarafından manuel olarak kabul edilmesi gerekmez. kaynak: <a href="https://takdio.com/anydesk-nedir-nasil-kullanilir">https://takdio.com/anydesk-nedir-nasil-kullanilir</a>/
        </p>
    <body>
    <iframe src="https://takdio.com/wp-content/uploads/2021/07/Uzak-Masaustu-baglantisi-Nasil-yapilir.png"></iframe>
    </body>
    
      </main>

      <Footer />
    </div>
  )
}
