import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }
  return (
    <div className={`${inter.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
