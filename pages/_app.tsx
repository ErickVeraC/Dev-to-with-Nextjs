import "@/styles/globals.css";
import "@/styles/quill.css";
import "@/utils/fontawesome";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
