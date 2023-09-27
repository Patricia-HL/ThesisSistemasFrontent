// reducers/authReducer.js
import { authTypes } from '../types/authTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: null,
  error: null,
  isTemporaryPassword: localStorage.getItem('isTemporaryPassword') === 'true',
  loading: false,
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
    case authTypes.SetTemporaryPassword:
      localStorage.setItem('isTemporaryPassword', action.payload); // Actualizar isTemporaryPassword en localStorage
      return {
        ...state,
        isTemporaryPassword: action.payload,
      };
    case authTypes.ChangeInitialPasswordRequest:
      return {
        ...state,
        isChangingPassword: true, // Marca que se está iniciando el cambio de contraseña
      };
    case authTypes.ChangeInitialPasswordSuccess:
      return {
        ...state,
        isChangingPassword: false, // Marca que el cambio de contraseña ha tenido éxito
        isAuthenticated: true, // Puedes ajustar esto según tu lógica
        user: action.payload.user, // Actualiza los datos del usuario si es necesario
      };
    case authTypes.ChangeInitialPasswordFailure:
      return {
        ...state,
        isChangingPassword: false, // Marca que el cambio de contraseña ha fallado
        error: action.payload, // Captura el mensaje de error
      };
    case authTypes.Logout:
      localStorage.removeItem('token');
      localStorage.removeItem('isTemporaryPassword'); // Remover isTemporaryPassword al hacer logout
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isTemporaryPassword: false, // Reiniciar a false al hacer logout
      };

    default:
      return state;
  }
};

export default authReducer;
