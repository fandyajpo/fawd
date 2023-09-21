import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalProvider from "@/lib/context";
import { Poppins } from "next/font/google";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const poppins = Poppins({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["devanagari"],
  preload: true,
  fallback: ["Wait"],
});

declare module "next" {
  export interface NextComponentType<T> {
    layout?: T;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const Layout =
    Component.layout ||
    (({ children }: { children: JSX.Element | JSX.Element[] }) => (
      <div className={poppins.className}>{children}</div>
    ));
  return (
    <main className={poppins.className}>
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </main>
  );
}
