const { Global } = require("@emotion/react");
const { css } = require("@emotion/react");

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Nanum Gothic Coding", monospace;
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
