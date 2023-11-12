// redux/authActions/loginActions.js
import { authTypes } from '../../types/authTypes.jsx';
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

export const setIsTemporaryPassword = (isTemporaryPassword) => ({
  type: authTypes.SetIsTemporaryPassword,
  payload: isTemporaryPassword,
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

        localStorage.setItem(
          'isTemporaryPassword',
          userData.user.isTemporaryPassword
        ); // Guardar isTemporaryPassword en localStorage

        const roles = userData.user.roles;
        localStorage.setItem('roles', JSON.stringify(roles));
        dispatch(setIsTemporaryPassword(userData.user.isTemporaryPassword));

        dispatch(loginSuccess(userData));
        console.log('User logged in successfully', userData);
      } else {
        const errorData = await response.json();
        dispatch(loginFailure(errorData.message));
        console.log(errorData.message); // Credenciales incorrectas, mensaje desde el servidor
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
  localStorage.removeItem('isTemporaryPassword'); // Remover isTemporaryPassword al hacer logout

  return {
    type: authTypes.Logout,
  };
};

export const changeInitialPasswordRequest = () => ({
  type: authTypes.ChangeInitialPasswordRequest,
});

export const changeInitialPasswordSuccess = (userData) => ({
  type: authTypes.ChangeInitialPasswordSuccess,
  payload: { user: userData },
});

export const changeInitialPasswordFailure = (error) => ({
  type: authTypes.ChangeInitialPasswordFailure,
  payload: error,
});

export const changeInitialPassword =
  (password, newPassword, confirmNewPassword) => async (dispatch) => {
    dispatch(changeInitialPasswordRequest());

    try {
      const response = await fetch(authEndpoints.changePasswordInitial.url, {
        method: authEndpoints.changePasswordInitial.method,
        headers: {
          'Content-Type': 'application/json',
          // Agrega encabezados de autorización si son necesarios
        },
        body: JSON.stringify({ password, newPassword, confirmNewPassword }),
      });

      if (response.ok) {
        const userData = await response.json();
        dispatch(changeInitialPasswordSuccess(userData));
        dispatch(setIsTemporaryPassword(false));
        console.log(userData);
      } else {
        const errorData = await response.json();
        dispatch(changeInitialPasswordFailure(errorData.message));
        console.log(errorData);
      }
    } catch (error) {
      if (error.name === 'ValidationError') {
        dispatch(changeInitialPasswordFailure(error.errors[0]));
      } else {
        console.error(error);
        dispatch(
          changeInitialPasswordFailure('Error al iniciar cambio de Contraseña')
        );
      }
    }
  };
