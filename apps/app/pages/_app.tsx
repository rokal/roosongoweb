import { ScriptProvider } from "@lib/context/script/ScriptProvider";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useState } from "react";
import { GOOGLE_MAP_KEY } from "../lib/constants";
import "../public/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  const googlePlacesUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&libraries=places`;
  return (
    <ScriptProvider loaded={loaded}>
      <Component {...pageProps} />
      <Script
        async
        defer
        src={googlePlacesUrl}
        onLoad={() => setLoaded(true)}
      />
    </ScriptProvider>
  );
}
