import { ScriptProvider } from "@lib/context/script/ScriptProvider";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useState } from "react";
import "../public/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  const googlePlacesUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&libraries=places`;
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
