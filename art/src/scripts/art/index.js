
import React from "react";
import {render} from "react-dom";

import Routes from "./router"
import {Provider} from "react-redux"
import store from "./store";

render(
    <Provider store={store}>
    <Routes/>
    </Provider>,
    document.getElementById("app")
)


