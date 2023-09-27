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

export const loginFailure = (message) => ({
  type: authTypes.LoginFailure,
  payload: message,
});

export const setTemporaryPassword = (value) => ({
  type: authTypes.SetTemporaryPassword,
  payload: value,
});

export const loginUser =
  ({ dni, password }) =>
  async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await fetch(authEndpoints.login.url, {
        method: authEndpoints.login.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dni, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        const accessToken = userData.accessToken;

        localStorage.setItem('token', accessToken);

        const roles = userData.user.roles;
        localStorage.setItem('roles', JSON.stringify(roles));
        dispatch(setTemporaryPassword(userData.user.isTemporaryPassword));

        dispatch(loginSuccess(userData));
      } else {
        const errorData = await response.json();
        dispatch(loginFailure(errorData.message));
        console.log(errorData.message); //credenciales incorrectas manda mensaje desde el servidor
      }
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errorMessage = error.errors[0];
        dispatch(loginFailure(errorMessage));
      } else {
        console.error(error);
        dispatch(loginFailure('Error al iniciar sesión'));
      }
    }
  };

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('roles');

  return {
    type: authTypes.Logout,
  };
};
