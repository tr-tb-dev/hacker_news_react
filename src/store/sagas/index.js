import { all } from 'redux-saga/effects'
import watchInitApp from './initAppSaga'

export default function* rootSaga() {
  yield all([
    watchInitApp(),
  ])
}
