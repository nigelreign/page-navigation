import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/dashboard";
import PageOne from "pages/page-one";
import PageTwo from "pages/page-two";

import AccessorContainer from "accessors/container";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line no-unused-vars
import { PATHS, ROOT_PATH } from "./paths";

const routes = () => (
  <>
    {/* Get cards from redux store */}
    <AccessorContainer />

    {/* Initializing toast for alert messages */}
    <ToastContainer />

    {/* Routers */}
    <Router>
      <Switch>
        <Route exact path={ROOT_PATH} component={Dashboard} />
        <Route exact path={PATHS.pageOne} component={PageOne} />
        <Route exact path={PATHS.pageTwo} component={PageTwo} />
      </Switch>
    </Router>
  </>
);

export default routes;
