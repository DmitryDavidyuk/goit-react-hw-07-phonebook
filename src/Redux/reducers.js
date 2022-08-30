import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import * as contactsActions from './actions';

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

const filter = createReducer('', {
  [contactsActions.filter]: (state, action) => {
    state.filter = action.payload;
  },
});

export default combineReducers({
  items,
  isLoading,
  filter,
});

// const initialState = {
//   items: [],
//   filter: '',
// };

// export const contactsSlice = createSlice({
//   name: 'contact',
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.items = [...state.items, action.payload];
//     },
//     deleteContact: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     filterContacts: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['items'],
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact, filterContacts } =
//   contactsSlice.actions;
// export default contactsSlice.reducer;
