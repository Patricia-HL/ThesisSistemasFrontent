import Icon from '@mui/material/Icon';

// Pages- Publics
import AboutUs from '../pages/landing-pages/AboutUs';
import Cosmeticos from '../pages/landing-pages/Esika/Cosmeticos';
import Maquillaje from '../pages/landing-pages/Esika/Maquillaje';
import Perfumes from '../pages/landing-pages/Esika/Perfumes';
import ContactUs from '../pages/landing-pages/ContactUs';
import SignIn from '../pages/landing-pages/SignIn';

// Pages Privates
import Main from '../pages/dashboard-pages/Main';
import AdminRegister from '../pages/dashboard-pages/Admin/AdminRegister';
import AdminList from '../pages/dashboard-pages/Admin/AdminList';
import PermisionRegister from '../pages/dashboard-pages/Permision/PermisionRegister';
import PermisionList from '../pages/dashboard-pages/Permision/PermisionList';
import RoleRegister from '../pages/dashboard-pages/Role/RoleRegister';
import RoleList from '../pages/dashboard-pages/Role/RoleList';
//import Logout from "../Layouts/pages/dashboard-pages/Logout";

const publicRoutes = [
  {
    name: 'Sobre Nosotros',
    route: '/about-us',
    component: <AboutUs />,
  },
  {
    name: 'Beauty Productoss',
    // icon: <Icon>Home</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'Esika',
        collapse: [
          {
            name: 'Cosmeticos',
            route: '/cosmeticos',
            component: <Cosmeticos />,
          },
          {
            name: 'Maquillaje',
            route: '/maquillaje',
            component: <Maquillaje />,
          },
          {
            name: 'Perfumes',
            route: '/perfumes',
            component: <Perfumes />,
          },
        ],
      },
      {
        name: "L'bel",
        collapse: [
          {
            name: 'Cosmeticos',
            route: '/cosmeticos',
            component: <Cosmeticos />,
          },
        ],
      },
      {
        name: 'Cyzone',
        collapse: [
          {
            name: 'Cosmeticos',
            route: '/cosmeticos',
            component: <Cosmeticos />,
          },
        ],
      },
    ],
  },
  {
    name: 'Contacto',
    route: '/contact-us',
    component: <ContactUs />,
  },
  {
    name: 'Ingresar',
    route: '/sign-in',
    component: <SignIn />,
  },
];

const privateRoutes = [
  {
    name: 'Principal',
    //icon: <Icon>Dashboard</Icon>,
    route: '/dashboard',
    component: <Main />,
  },
  {
    name: 'Permiso',
    //icon: <Icon>Permiso</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'Registrar',
        route: '/register-permision',
        component: <PermisionRegister />,
      },
      {
        name: 'Listar',
        route: '/list-permision',
        component: <PermisionList />,
      },
    ],
  },
  {
    name: 'Rol',
    //icon: <Icon>Rol</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'Registrar',
        route: '/register-role',
        component: <RoleRegister />,
      },
      {
        name: 'Listar',
        route: '/list-role',
        component: <RoleList />,
      },
    ],
  },
  {
    name: 'Administrador',
    //icon: <Icon>Administrador</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'Registrar',
        route: '/register-admin',
        component: <AdminRegister />,
      },
      {
        name: 'Listar',
        route: '/list-admin',
        component: <AdminList />,
      },
    ],
  },
  /* {
    name: "Salir",
    route: "/logout",
    component: <Logout />,
  },*/
];

export { publicRoutes, privateRoutes };
