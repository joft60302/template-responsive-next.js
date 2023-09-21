import '../assets/css/globals.css'


export default function App({ Component, pageProps }) {
  return ( 
    <div>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
    </Head>
      <Component {...pageProps} />
    </div>
   );
 }

 