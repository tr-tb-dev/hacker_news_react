import { call, takeLatest } from 'redux-saga/effects'
import { initApp } from '../actions/appActions'

function* initializeApp() {
  try {
    console.log('Saga is running');
  } catch (error) {
    console.error('Error in initializeApp:', error)
  }
}

function* watchInitApp() {
  yield takeLatest(initApp.type, initializeApp)
}

export default watchInitApp
