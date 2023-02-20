import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { debug, styletron } from "../../styletron";
import { DarkTheme, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <BaseProvider theme={LightTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}
