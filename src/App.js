import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importa useSelector de react-redux
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
                path='/change-password-initial'
                component={ChangePasswordInitial}
              />
            )}
            {isTemporaryPassword || (
              <Redirect
                to={
                  isTemporaryPassword
                    ? '/change-password-initial'
                    : '/dashboard'
                }
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
            <Redirect to='/about-us' />
          </Switch>
        </LayoutPage>
      )}
    </Router>
  );
};

export default App;
