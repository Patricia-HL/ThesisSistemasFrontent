// reducers/authReducer.js
import { authTypes } from '../types/authTypes';

const initialState = {
  token: null,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  loading: false,
  user: null,
  errorLogin: null,
  errorChangepasswordInitial: null,
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
        errorLogin: null,
      };
    case authTypes.LoginFailure:
      return {
        ...state,
        token: null,
        loading: false,
        errorLogin: action.payload,
      };
    case authTypes.SetIsTemporaryPassword:
      // console.log('Setting Temporary Password:', action.payload);
      localStorage.setItem('isTemporaryPassword', action.payload);

      // Actualizar isTemporaryPassword en localStorage
      return {
        ...state,
        isTemporaryPassword: action.payload,
      };
    case authTypes.ChangeInitialPasswordRequest:
      localStorage.setItem('isChangingPassword', 'true'); // Guarda en localStorage
      return {
        ...state,
        loading: true,
        errorChangepasswordInitial: null,
        isChangingPassword: true, // Marca que se está iniciando el cambio de contraseña
      };

    case authTypes.ChangeInitialPasswordSuccess:
      localStorage.removeItem('isChangingPassword'); // Elimina del localStorage
      return {
        ...state,
        loading: false,
        errorChangepasswordInitial: null,
        isChangingPassword: false, // Marca que el cambio de contraseña ha tenido éxito
        isAuthenticated: true, // Puedes ajustar esto según tu lógica
        user: action.payload.userData, // Actualiza los datos del usuario si es necesario
      };

    case authTypes.ChangeInitialPasswordFailure:
      localStorage.removeItem('isChangingPassword'); // Elimina del localStorage
      return {
        ...state,
        loading: false,
        isChangingPassword: false, // Marca que el cambio de contraseña ha fallado
        errorChangepasswordInitial: action.payload, // Captura el mensaje de errorLogin
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
