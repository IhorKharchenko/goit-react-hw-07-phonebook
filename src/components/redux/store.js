import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistContactsConfig = {
  key: 'contacts',
  storage,
};
const persistFilterConfig = {
  key: 'filter',
  storage,
};
const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer
);
const persistedFilterReducer = persistReducer(
  persistFilterConfig,
  filterReducer
);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
