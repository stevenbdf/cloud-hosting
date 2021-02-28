import { useEffect } from "react";
import AOS from "aos";
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
