import Icon from '@mui/material/Icon';

// Pages- Publics
import AboutUs from '../pages/landing-pages/AboutUs';
import Cosmeticos from '../pages/landing-pages/Esika/Cosmeticos';
import Maquillaje from '../pages/landing-pages/Esika/Maquillaje';
import Perfumes from '../pages/landing-pages/Esika/Perfumes';
import ContactUs from '../pages/landing-pages/ContactUs';
import SignIn from '../pages/landing-pages/SignIn';

// Pages Privates
import ChangePasswordInitial from '../pages/dashboard-pages/auth/ChangePasswordInitial';
import Main from '../pages/dashboard-pages/Main';
import AdminRegister from '../pages/dashboard-pages/users/Admin/AdminRegister';
import AdminList from '../pages/dashboard-pages/users/Admin/AdminList';
import PermisionRegister from '../pages/dashboard-pages/users/Permision/PermisionRegister';
import PermisionList from '../pages/dashboard-pages/users/Permision/PermisionList';
import RoleRegister from '../pages/dashboard-pages/users/Role/RoleRegister';
import RoleList from '../pages/dashboard-pages/users/Role/RoleList';
import PegsList from '../pages/dashboard-pages/users/Pegs/PegsList';
import PegsRegister from '../pages/dashboard-pages/users/Pegs/PegsRegister';
import ConsultoriaList from '../pages/dashboard-pages/users/Consultoria/ConsultoriaList';
import ConsultoriaRegister from '../pages/dashboard-pages/users/Consultoria/ConsultoriaRegister';
import LiderEmpresariaList from '../pages/dashboard-pages/users/LiderEmpresaria/LiderEmpresariaList';
import LiderEmpresariaRegister from '../pages/dashboard-pages/users/LiderEmpresaria/LiderEmpresariaRegister';
import SeccionRegister from '../pages/dashboard-pages/Secciones/SecciónRegister';
import SeccionList from '../pages/dashboard-pages/Secciones/SeccionList';

import GerenciaRegister from '../pages/dashboard-pages/users/Gerencia/GerenciaRegister';
import GerenciaList from '../pages/dashboard-pages/users/Gerencia/GerenciaList';
import SeguimientoActividades from '../pages/dashboard-pages/SeguimientoActividades';
import Comunicados from '../pages/dashboard-pages/Services/Comunicados';
import ServiciosAtencion from '../pages/dashboard-pages/Services/ServiciosAtención';
import Camapañas from '../pages/dashboard-pages/Services/Campañas';
import Conferencias from '../pages/dashboard-pages/Services/Conferencias';
//import Logout from "../Layouts/pages/dashboard-pages/Logout";
const publicRoutes = [
  {
    name: 'Sobre Nosotros',
    route: '/about-us',
    component: AboutUs,
  },
  {
    name: 'Belleza Intelectual',
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'Esika',
        collapse: [
          {
            name: 'Cosmeticos',
            route: '/beauty-products/esika/cosmeticos',
            component: Cosmeticos,
          },
          {
            name: 'Maquillaje',
            route: '/beauty-products/esika/maquillaje',
            component: Maquillaje,
          },
          {
            name: 'Perfumes',
            route: '/beauty-products/esika/perfumes',
            component: Perfumes,
          },
        ],
      },
      {
        name: "L'bel",
        collapse: [
          {
            name: 'Cosmeticos',
            route: '/beauty-products/lbel/cosmeticos',
            component: Cosmeticos,
          },
        ],
      },
      {
        name: 'Cyzone',
        collapse: [
          {
            name: 'Cosmeticos',
            route: '/beauty-products/cyzone/cosmeticos',
            component: Cosmeticos,
          },
        ],
      },
    ],
  },

  {
    name: 'Contacto',
    route: '/contact-us',
    component: ContactUs,
  },

  {
    name: 'Iniciar Sesión',
    route: '/sign-in',
    component: SignIn,
  },
];

const privateRoutes = [
  // {
  //   name: 'Cmbiar Contraseña',
  //   route: '/change-password',
  //   component: ChangePasswordInitial,
  // },
  {
    name: 'Inicio',
    route: '/dashboard',
    component: Main,
  },
  {
    name: 'Permiso',
    columns: 1,
    rowsPerColumn: 2,
    roles: ['Administrador'],
    collapse: [
      {
        name: 'Registrar',
        route: '/register-permision',
        component: PermisionRegister,
      },
      {
        name: 'Listar',
        route: '/list-permision',
        component: PermisionList,
      },
    ],
  },
  {
    name: 'Rol',
    columns: 1,
    rowsPerColumn: 2,
    roles: ['Administrador'],
    collapse: [
      {
        name: 'Registrar',
        route: '/register-role',
        component: RoleRegister,
      },
      {
        name: 'Listar',
        route: '/list-role',
        component: RoleList,
      },
    ],
  },
  {
    name: 'Administrador',
    columns: 1,
    rowsPerColumn: 2,
    roles: ['Administrador'],
    collapse: [
      {
        name: 'Registrar',
        route: '/register-admin',
        component: AdminRegister,
      },
      {
        name: 'Listar',
        route: '/list-admin',
        component: AdminList,
      },
    ],
  },
  {
    name: 'Gerencia',
    columns: 1,
    rowsPerColumn: 2,
    roles: ['Administrador'],
    collapse: [
      {
        name: 'Registrar',
        route: '/register-gerente',
        component: GerenciaRegister,
      },
      {
        name: 'Listar',
        route: '/list-gerente',
        component: GerenciaList,
      },
    ],
  },
  {
    name: 'Lider Empresa',
    columns: 1,
    rowsPerColumn: 2,
    roles: ['Gerente'],
    collapse: [
      {
        name: 'Seccion',
        collapse: [
          {
            name: 'Registar',
            route: '/registar-seccion',
            component: SeccionRegister,
          },
          {
            name: 'Listar',
            route: '/listar-sección',
            component: SeccionList,
          },
        ],
      },

      {
        name: 'Lider Empresaria',
        collapse: [
          {
            name: 'Registar',
            route: '/registar-lider-empresa',
            component: LiderEmpresariaRegister,
          },
          {
            name: 'Listar',
            route: '/listar-lider-empresa',
            component: LiderEmpresariaList,
          },
        ],
      },
    ],
  },
  {
    name: 'Consultoria',
    columns: 1,
    rowsPerColumn: 2,
    roles: ['Lider', 'Gerente'],
    collapse: [
      {
        name: 'Registrar',
        route: '/register-Consultora',
        component: ConsultoriaRegister,
      },
      {
        name: 'Listar',
        route: '/list-consultora',
        component: ConsultoriaList,
      },
    ],
  },
  {
    name: 'Pegs',
    columns: 1,
    rowsPerColumn: 2,
    roles: ['Lider, Gerente'],
    collapse: [
      {
        name: 'Registrar',
        route: '/register-pegs',
        component: PegsRegister,
      },
      {
        name: 'Listar',
        route: '/list-pegs',
        component: PegsList,
      },
    ],
  },
  {
    name: 'Servicios',
    columns: 1,
    rowsPerColumn: 2,
    roles: ['Lider', 'Gerente'],
    collapse: [
      {
        name: 'Conferencias',
        route: '/conferencias',
        component: Conferencias,
      },
      {
        name: 'Campañas',
        route: '/campanias',
        component: Camapañas,
      },
      {
        name: 'Servicios de Atención',
        route: '/servicios-de-atencion',
        component: ServiciosAtencion,
      },
      {
        name: 'Comunicados',
        route: '/comunicados',
        component: Comunicados,
        roles: ['Lider,', 'Gerente', 'Consultoria', 'Pegs'],
      },
    ],
  },
  {
    name: 'Seguimiento de Actividades',
    route: '/seguimiento-de-actividades',
    roles: ['Gerente'],
    component: SeguimientoActividades,
  },
];

export { publicRoutes, privateRoutes };
