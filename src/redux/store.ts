import { configureStore } from "@reduxjs/toolkit";
import  linkReducer from './linkSlice';
import  userReducer from './userSlice';
import  inputValueReducer from './inputValueSlice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "../saga/rootSaga";
//import { applyMiddleware } from "redux";

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer:{
    links: linkReducer,
    user: userReducer,
    inputValues: inputValueReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>