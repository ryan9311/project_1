const { Global } = require("@emotion/react");
const { css } = require("@emotion/react");

const style = css`
  @font-face {
    font-family: "omyu_pretty";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "omyu_pretty";
  }

  input:focus {
    outline: none !important;
    border: 2px solid #3a8ef0;
  }

  textarea:focus {
    outline: none !important;
    border: 2px solid #3a8ef0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style}></Global>;
};

export default GlobalStyle;
