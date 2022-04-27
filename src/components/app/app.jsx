import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import { AppRoute } from '../../const';
import Error404 from "../../pages/error404/error404";

const App = ({events}) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <Main events={events}/>
      </Route>
      <Route path={AppRoute.ARCHIVE} exact>
        <Archive events={events}/>
      </Route>
      <Route path={AppRoute.EVENT} exact>
        <Form events={events}></Form>
      </Route>
      <Route > <Error404 /> </Route>
    </Switch>
    </BrowserRouter>
  )}

export default App;
