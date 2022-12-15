import type { AppProps } from "next/app";
import Head from "next/head";
import { GOOGLE_MAP_KEY } from "src/constants";
import "../public/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&libraries=places`}
        ></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
