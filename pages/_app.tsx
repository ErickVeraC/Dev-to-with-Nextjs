import "@/styles/globals.css";
import "@/styles/quill.css";
import { Fanwood_Text } from "next/font/google";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
