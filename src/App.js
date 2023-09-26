import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import LayoutPage from './Layouts/LayoutPage';
import LayoutDashboard from './Layouts/LayoutDashboard';
import ChangePasswordInitial from './pages/dashboard-pages/auth/ChangePasswordInitial';
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
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isTemporaryPassword = useSelector(
    (state) => state.auth.isTemporaryPassword
  );

  const history = useHistory();

  return (
    <Router>
      {isAuthenticated ? (
        <LayoutDashboard
          isAuthenticated={isAuthenticated}
          privateRoutes={privateRoutes}
        >
          <Switch>
            {renderRoutes(privateRoutes)}
            {isTemporaryPassword && (
              <Route
                to='/change-password-initial'
                component={ChangePasswordInitial}
              />
            )}
          </Switch>
        </LayoutDashboard>
      ) : (
        <LayoutPage
          isAuthenticated={isAuthenticated}
          publicRoutes={publicRoutes}
        >
          <Switch>
            {renderRoutes(publicRoutes)}
            <Redirect to={history.location.pathname} />
          </Switch>
        </LayoutPage>
      )}
    </Router>
  );
};

export default App;
