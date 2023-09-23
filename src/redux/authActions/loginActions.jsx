// actions/authActions.js
import { authTypes } from '../../types/authTypes';
import { authEndpoints } from '../../types/endPoints.jsx';

export const loginRequest = () => ({
  type: authTypes.LoginRequest,
});

export const loginSuccess = (userData) => {
  return {
    type: authTypes.LoginSuccess,
    payload: userData,
  };
};

export const loginFailure = () => ({
  type: authTypes.LoginFailure,
});

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await fetch(authEndpoints.login.url, {
      method: authEndpoints.login.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const userData = await response.json();
      console.log('User', userData);
      const accessToken = userData.accessToken; // Obtén el token de acceso

      // Almacena el token de acceso en el localStorage
      localStorage.setItem('token', accessToken);

      const roles = userData.user.roles; // Obtén los roles
      localStorage.setItem('roles', JSON.stringify(roles)); // Almacena los roles en el localStorage
      dispatch(loginSuccess(roles));
      console.log('roles', roles);
      dispatch(loginSuccess(userData)); // Llama a loginSuccess con userData
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logout = () => {
  // Elimina los datos de usuario del localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('roles');

  return {
    type: authTypes.Logout, // Define un nuevo tipo de acción para el logout
  };
};
