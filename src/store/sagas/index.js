import { all } from 'redux-saga/effects'
import watchInitApp from '@/store/sagas/initAppSaga'
import localStorageSaga from '@/store/sagas/localStorageSaga'

export default function* rootSaga() {
  yield all([watchInitApp(), localStorageSaga()])
}
