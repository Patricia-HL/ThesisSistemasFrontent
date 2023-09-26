// reducers/authReducer.js
import { authTypes } from '../types/authTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: null,
  isTemporaryPassword: true, // Inicializamos con true
  loading: false,
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
        loading: false,
      };
    case authTypes.LoginFailure:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    case authTypes.Logout:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        // isTemporaryPassword: true, // Reseteamos a true al hacer logout
      };
    case authTypes.SetTemporaryPassword: // Nuevo caso para actualizar isTemporaryPassword
      return {
        ...state,
        isTemporaryPassword: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
