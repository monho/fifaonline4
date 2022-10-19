import React from "react";
import { BrowserRouter, Navigate , Route, Routes  } from "react-router-dom";

import * as P from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/about" component={P.aboutPage} />
        <Route path="/" component={P.mainPage} />
        <Navigate  path="*" to="/" />
      </Routes >
    </BrowserRouter>
  );
};

export default App;