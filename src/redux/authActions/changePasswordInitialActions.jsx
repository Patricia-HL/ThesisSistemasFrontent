// redux/authActions/changePasswordActions.js

import { authTypes } from '../../types/authTypes';
import { authEndpoints } from '../../types/endPoints.jsx';

export const changeInitialPasswordRequest = () => ({
  type: authTypes.ChangeInitialPasswordRequest,
});

export const changeInitialPasswordSuccess = (userData) => ({
  type: authTypes.ChangeInitialPasswordSuccess,
  payload: { user: userData },
});

export const changeInitialPasswordFailure = (message) => ({
  type: authTypes.ChangeInitialPasswordFailure,
  payload: message,
});
export const changeInitialPassword =
  (password, newPassword) => async (dispatch) => {
    dispatch(changeInitialPasswordRequest());

    try {
      // Realiza la solicitud al servidor para cambiar la contraseña inicial
      const response = await fetch(authEndpoints.changePasswordInitial.url, {
        method: authEndpoints.changePasswordInitial.method, // Utiliza el método PUT
        headers: {
          'Content-Type': 'application/json',
          // Puedes agregar encabezados de autorización si es necesario
        },
        body: JSON.stringify({ password, newPassword }),
      });

      if (response.ok) {
        const userData = await response.json();
        // Si el cambio de contraseña es exitoso, dispara la acción de éxito
        dispatch(changeInitialPasswordSuccess(userData));
      } else {
        const errorData = await response.json();
        // Si hay un error en el cambio de contraseña, dispara la acción de fallo
        dispatch(changeInitialPasswordFailure(errorData.message));
        console.log(errorData.message); // Credenciales incorrectas, mensaje desde el servidor
      }
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errorMessage = error.errors[0];
        dispatch(changeInitialPasswordFailure(errorMessage));
      } else {
        console.error(error);
        dispatch(
          changeInitialPasswordFailure('Error al iniciar cambio de Contraseña')
        );
      }
    }
  };
