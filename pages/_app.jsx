import React, { useEffect } from "react";
import { PageTransition } from "next-page-transitions";
import { initializeGA, logPage } from "../components/Analytics";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initializeGA();
    logPage();
  }, []);

  return (
    <div>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </div>
  );
}
