// App.js

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import LayoutPage from './Layouts/LayoutPage';
import LayoutDashboard from './Layouts/LayoutDashboard';
import { publicRoutes, privateRoutes } from './routes';

const renderRoutes = (routes) => {
  return routes.map((route) => {
    if (route.collapse) {
      return renderRoutes(route.collapse);
    } else {
      return (
        <Route
          key={route.name}
          path={route.route}
          exact
          component={route.component}
        />
      );
    }
  });
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const toggleAuthentication = () => {
    setIsAuthenticated((prevIsAuthenticated) => !prevIsAuthenticated);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <LayoutDashboard
          isAuthenticated={isAuthenticated}
          privateRoutes={privateRoutes}
        >
          <Switch>
            {renderRoutes(privateRoutes)}
            <Redirect to='/dashboard' />
          </Switch>
        </LayoutDashboard>
      ) : (
        <LayoutPage
          isAuthenticated={isAuthenticated}
          publicRoutes={publicRoutes}
        >
          <Switch>
            {renderRoutes(publicRoutes)}
            <Redirect to='/about-us' />
          </Switch>
        </LayoutPage>
      )}
    </Router>
  );
};

export default App;
