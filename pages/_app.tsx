import "../styles/globals.css";
import type { AppProps } from "next/app";
import Topbar from "../component/Topbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
