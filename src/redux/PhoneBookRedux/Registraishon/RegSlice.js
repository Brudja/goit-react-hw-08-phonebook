import { createSlice } from '@reduxjs/toolkit';
import { currentOperation, loginOperation, registrUser } from './RegOperethion';

const Status = {
    init: 'INIT',
    loading: 'LOADING',
    success: 'SUCCESS',
    error: 'ERROR',
  };

  const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    status: Status.init,
  };

  const registrSlice = createSlice({
    name: 'regisrt',
    initialState,
    extraReducers: {
      [registrUser.pending](state) {
        state.status = Status.loading;
      },
      [registrUser.fulfilled](state, action) {
        state.status = Status.success;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [registrUser.rejected](state) {
        state.status = Status.error;
        state.user.name = null;
        state.user.email = null;
        state.isLoggedIn = false;
        state.token = null;
      },
  
      [loginOperation.pending](state) {
        state.status = Status.loading;
      },
      [loginOperation.fulfilled](state, action) {
        state.status = Status.success;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [loginOperation.rejected](state) {
        state.status = Status.error;
        state.user.name = null;
        state.user.email = null;
        state.isLoggedIn = false;
        state.token = null;
      },
      [currentOperation.pending](state) {
        state.status = Status.loading;
      },
      [currentOperation.fulfilled](state, action) {
        state.status = Status.success;
        state.user = action.payload;
        state.isLoggedIn = true;
      },
      [currentOperation.rejected](state) {
        state.status = Status.error;
        state.user.name = null;
        state.user.email = null;
        state.isLoggedIn = false;
        state.token = null;
      },
    },
  });

  export default registrSlice