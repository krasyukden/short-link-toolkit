import { AxiosResponse } from 'axios';
import { getLinksSuccess, ILinks, sendLinksRequest } from "../redux/linkSlice";
import { take, takeEvery, put, call } from 'redux-saga/effects'
import { postLink } from "../api";


function* workerSaga(action: any): Generator {
  
  //console.log(action)

  try{
    const links: any/* AxiosResponse *//* Promise<Array<ILinks>> */ = yield call(postLink, action.payload.inputValue);
    yield put(getLinksSuccess(links))
  } catch{///.....

  }
}

export function* watchLoadSaga(): Generator {
  yield takeEvery('links/sendLinksRequest', workerSaga)
}