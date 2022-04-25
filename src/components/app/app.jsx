import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import Error404 from "../../pages/error404/error404";
import { AppRoute } from '../../const';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <Main />
      </Route>
      <Route path={AppRoute.ARCHIVE} exact>
        <Archive />
      </Route>
      <Route path={AppRoute.EVENT} exact>
        <Form />
      </Route>
      <Route > <Error404 /> </Route>
    </Switch>
    </BrowserRouter>
  )}

export default App;
