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

export const changeInitialPasswordFailure = (error) => ({
  type: authTypes.ChangeInitialPasswordFailure,
  payload: { error },
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
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      // Si hay un error en la solicitud, dispara la acción de fallo con el mensaje de error
      dispatch(changeInitialPasswordFailure('Error al cambiar la contraseña'));
    }
  };
