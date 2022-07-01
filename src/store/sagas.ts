import { all, fork } from "redux-saga/effects";
import { pokedexSagas } from "../pokedex-module/store/pokedex.sagas";
export const rootSaga = function* rootSaga() {
  yield all([fork(pokedexSagas)]);
};
