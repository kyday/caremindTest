import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import Theme from "./Styles/theme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);

ReactDOM.render(
  <>
    <GlobalStyle />
    <Theme>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Theme>
  </>,
  document.getElementById("root")
);
