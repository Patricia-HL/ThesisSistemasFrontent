import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes'; // Import the routes array
import LayoutPage from './Layouts/LayoutPage';
import LayoutDashboard from './Layouts/LayoutDashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Public Routes 
        {publicRoutes.map((route) => (
          <Route key={route.name} path={route.route} exact>
            <LayoutPage publicRoutes={publicRoutes}>
              {route.component}
            </LayoutPage>
          </Route>
        ))}
*/}
        {/* Private Routes */}
        {privateRoutes.map((route) => (
          <Route key={route.name} path={route.route} exact>
            <LayoutDashboard privateRoutes={privateRoutes}>
              {route.component}
            </LayoutDashboard>
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
