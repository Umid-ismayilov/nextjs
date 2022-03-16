// import App from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const { locale } = router;
  
    useEffect(() => {
            console.log(  locale);
      }, [])

    return <Component {...pageProps} />
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  export const getStaticPaths = (Context) => {
    return true;
  }
  
  
  export default MyApp