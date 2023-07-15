import GlobalStyle from "@/styles/common/global.styles";
import { Helmet } from "react-helmet";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
