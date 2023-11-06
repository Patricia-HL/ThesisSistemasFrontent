import { authTypes } from "../../types/authTypes";
import { authEndpoints } from "../../types/endPoints.jsx";

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
          "Content-Type": "application/json",
          // Agrega encabezados de autorización si son necesarios
        },
        body: JSON.stringify({ password, newPassword, confirmNewPassword }),
      });

      if (response.ok) {
        const userData = await response.json();
        dispatch(changeInitialPasswordSuccess(userData));
        console.log(userData);
      } else {
        const errorData = await response.json();
        dispatch(changeInitialPasswordFailure(errorData.message));
        console.log(errorData);
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        dispatch(changeInitialPasswordFailure(error.errors[0]));
      } else {
        console.error(error);
        dispatch(
          changeInitialPasswordFailure("Error al iniciar cambio de Contraseña")
        );
      }
    }
  };
