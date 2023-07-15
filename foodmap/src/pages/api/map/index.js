import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=gjafp4ug7c&submodules=geocoder`}
      ></script>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
