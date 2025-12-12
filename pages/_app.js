import "../styles/globals.css";
import ComingSoon from "../components/ComingSoon";

export default function MyApp({ Component, pageProps }) {
  const isProd = process.env.NODE_ENV === "production";
  const isLive = process.env.NEXT_PUBLIC_SITE_LIVE === "true";

  if (isProd && !isLive) {
    return <ComingSoon />;
  }

  return <Component {...pageProps} />;
}
