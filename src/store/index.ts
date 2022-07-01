import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { reducers } from "./reducers";
import { rootSaga } from "./sagas";

const sagaMiddware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const reduxDefaultMiddleware = getDefaultMiddleware();
    return [...reduxDefaultMiddleware, sagaMiddware];
  },
});

sagaMiddware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
