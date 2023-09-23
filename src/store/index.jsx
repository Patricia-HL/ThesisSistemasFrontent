// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer'; // Importa tu reducer de autenticación aquí

const rootReducer = combineReducers({
  auth: authReducer, // authReducer es un ejemplo, deberías tener otros reducers también
});

const store = configureStore({
  reducer: rootReducer,
  // Agrega middleware aquí si es necesario
});

export default store;
