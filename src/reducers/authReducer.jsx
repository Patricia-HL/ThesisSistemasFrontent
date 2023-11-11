// reducers/authReducer.js
import { authTypes } from '../types/authTypes';

const initialState = {
  token: null,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  loading: false,
  user: null,
  error: null,
  isTemporaryPassword: localStorage.getItem('isTemporaryPassword') || null,
  isChangingPassword: false, // Nuevo estado para controlar el proceso de cambio de contraseña
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LoginRequest:
      return {
        ...state,
        loading: true,
      };
    case authTypes.LoginSuccess:
      localStorage.setItem('token', action.payload.accessToken);

      return {
        ...state,
        token: action.payload.accessToken,
        user: action.payload.userData,
        isAuthenticated: true,
        isTemporaryPassword: action.payload.user.isTemporaryPassword,
        loading: true,
        error: null,
      };
    case authTypes.LoginFailure:
      return {
        ...state,
        token: null,
        loading: false,
        error: action.payload,
      };
    case authTypes.SetIsTemporaryPassword:
      console.log('Setting Temporary Password:', action.payload);
      localStorage.setItem('isTemporaryPassword', action.payload);

      // Actualizar isTemporaryPassword en localStorage
      return {
        ...state,
        isTemporaryPassword: action.payload,
      };
    case authTypes.ChangeInitialPasswordRequest:
      return {
        ...state,
        loading: true,
        error: null, //
        isChangingPassword: false, // Marca que se está iniciando el cambio de contraseña
      };
    case authTypes.ChangeInitialPasswordSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        isChangingPassword: true, // Marca que el cambio de contraseña ha tenido éxito
        isAuthenticated: true, // Puedes ajustar esto según tu lógica
        user: action.payload.userData, // Actualiza los datos del usuario si es necesario
      };
    case authTypes.ChangeInitialPasswordFailure:
      return {
        ...state,
        loading: false,
        user: null,
        isChangingPassword: false, // Marca que el cambio de contraseña ha fallado
        error: action.payload, // Captura el mensaje de error
      };
    case authTypes.Logout:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isTemporaryPassword: null,
      };

    default:
      return state;
  }
};

export default authReducer;
