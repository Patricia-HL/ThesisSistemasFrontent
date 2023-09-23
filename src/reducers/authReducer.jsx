// reducers/authReducer.js
import { authTypes } from '../types/authTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: null,

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
        token: action.payload.accessToken, // Actualiza el token
        user: action.payload.userData,

        isAuthenticated: true,
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
    case authTypes.Logout: // Nuevo caso para el logout
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
