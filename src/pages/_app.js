import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (

    <>
    <div className="site-wrap">

    <Layout>
    <Component {...pageProps} />
    </Layout>
    </div>
  {/* <Script src="assets/js/jquery-3.3.1.min.js"/> */}
  {/* <Script src="assets/js/jquery-ui.js"/> */}
  {/* <Script src="assets/js/popper.min.js"/> */}
  {/* <Script src="assets/js/bootstrap.min.js"/> */}
  {/* <Script src="assets/js/owl.carousel.min.js"/> */}
  {/* <Script src="assets/js/jquery.magnific-popup.min.js"/> */}
  <Script src="assets/js/aos.js"/>

  {/* <Script src="assets/js/main.js"/> */}
    </>
  )
}
