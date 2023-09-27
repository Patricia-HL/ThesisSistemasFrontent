// reducers/authReducer.js
import { authTypes } from '../types/authTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: null,
  error: null,
  isTemporaryPassword: localStorage.getItem('isTemporaryPassword') === 'true',
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
        error: null,
      };
    case authTypes.LoginFailure:
      return {
        ...state,
        token: null,
        loading: false,
        error: action.payload,
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
    case authTypes.SetTemporaryPassword:
      localStorage.setItem('isTemporaryPassword', action.payload); // Actualizar isTemporaryPassword en localStorage
      return {
        ...state,
        isTemporaryPassword: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
