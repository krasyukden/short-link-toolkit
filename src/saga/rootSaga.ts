import { all } from 'redux-saga/effects';
import { watchLoadSaga } from './saga';

export function* rootSaga(): Generator {
  yield all([
    watchLoadSaga(), 
    //watchLoadComicsSaga()
  ]);
}

