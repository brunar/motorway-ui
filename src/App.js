import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom';
import './App.scss';

const Heros = lazy(() => import('./containers/Heros'));
const Profile = lazy(() => import('./containers/Profile/Profile'));

const App = () => {
  let routes = (
    <Switch>
      <Suspense fallback={<p>Loading Components Route....</p>}>
        <Route path="/profile" render={props => <Profile {...props} />} />
        <Route path="/" exact render={props => <Heros {...props} />} />
        <Redirect to="/" />
      </Suspense>
    </Switch>
  );
  return (
    <div>
      <header className="Header">
        <NavLink to="/profile" exact className="Links" activeClassName="active">Profile</NavLink>
        <NavLink to="/" exact className="Links" activeClassName="active">Heros</NavLink>
      </header>
      {routes}
    </div>
  );
}

export default withRouter(App);
