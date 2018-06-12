import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import Citizen from "modules/citizen";
import { ImageModalDisplay } from "modules/common";

const Main = ({ routes }) => {
  return (
    <main>
      <Switch>
        <Route
          path={`/citizen/`}
          render={(props) => {
            return <Citizen match={props.match} routes={routes.citizen} />;
          }}
        />
        <Route path={`/image`} component={ImageModalDisplay} />
        <Redirect from="/citizen/" to="/citizen/user/language-selection" />
      </Switch>
    </main>
  );
};

export default Main;
