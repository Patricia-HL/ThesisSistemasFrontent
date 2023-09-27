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
  const dispatch = useDispatch(); // Obtiene la función dispatch de Redux
  const history = useHistory();

  useEffect(() => {
    const currentPath = history.location.pathname;

    if (isAuthenticated) {
      if (currentPath === '/login') {
        if (isTemporaryPassword) {
          history.replace('/change-password');
        } else {
          history.replace('/dashboard');
        }
      }
    }
  }, [isAuthenticated, isTemporaryPassword, history]);

  // Verifica el valor de isTemporaryPassword en localStorage al cargar la aplicación
  useEffect(() => {
    const storedIsTemporaryPassword = localStorage.getItem(
      'isTemporaryPassword'
    );
    if (storedIsTemporaryPassword) {
      dispatch(setTemporaryPassword(storedIsTemporaryPassword === 'true'));
    }
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        {isAuthenticated ? (
          <>
            <LayoutDashboard
              isAuthenticated={isAuthenticated}
              privateRoutes={privateRoutes}
            >
              {renderRoutes(privateRoutes)}
              <Redirect
                to={!isTemporaryPassword ? '/dashboard' : '/change-password'}
              />
              {isTemporaryPassword && (
                <Route
                  path='/change-password'
                  component={ChangePasswordInitial}
                />
              )}
            </LayoutDashboard>
          </>
        ) : (
          <>
            <LayoutPage
              isAuthenticated={isAuthenticated}
              publicRoutes={publicRoutes}
            >
              {renderRoutes(publicRoutes)}
            </LayoutPage>
            <Redirect to='/about-us' />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
