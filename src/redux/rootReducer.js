
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import registrReducer from './PhoneBookRedux/Registraishon/RegSlice';
import filterReducer from "./PhoneBookRedux/FilterSlice";
import phonebookReducer from "./PhoneBookRedux/phonebookSlice"
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'notes',
  storage,
  whitelist: ['token'],
};
const persistedRegistrReducer = persistReducer(persistConfig, registrReducer);

export const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  filter: filterReducer,
  registr: persistedRegistrReducer,
});
