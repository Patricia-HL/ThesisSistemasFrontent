import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LayoutPage from './Layouts/LayoutPage';
import LayoutDashboard from './Layouts/LayoutDashboard';
import ChangePasswordInitial from './pages/dashboard-pages/auth/ChangePasswordInitial';
import { publicRoutes, privateRoutes } from './routes';
import { setTemporaryPassword } from './redux/authActions/loginActions'; // Importa la acción para establecer isTemporaryPassword

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
      <Switch>
        {isAuthenticated ? (
          <>
            <LayoutDashboard
              isAuthenticated={isAuthenticated}
              privateRoutes={privateRoutes}
            >
              {' '}
              <Switch>
                {renderRoutes(privateRoutes)}
                <Redirect
                  to={!isTemporaryPassword ? '/dashboard' : '/change-password'}
                />
              </Switch>
              {isTemporaryPassword && (
                <Route
                  path='/change-password'
                  component={ChangePasswordInitial}
                />
              )}{' '}
            </LayoutDashboard>
          </>
        ) : (
          <>
            <LayoutPage
              isAuthenticated={isAuthenticated}
              publicRoutes={publicRoutes}
            >
              {' '}
              <Switch>
                {renderRoutes(publicRoutes)}
                <Redirect to='/about-us' />{' '}
              </Switch>
            </LayoutPage>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
