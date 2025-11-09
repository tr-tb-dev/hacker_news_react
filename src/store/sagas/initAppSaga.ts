import { takeLatest } from 'redux-saga/effects'
import { initApp } from '@/store/actions/appActions'

function* initializeApp(): Generator {
  try {
    yield console.log('Saga is running')
  } catch (error) {
    console.error('Error in initializeApp:', error)
  }
}

function* watchInitApp(): Generator {
  yield takeLatest(initApp.type, initializeApp)
}

export default watchInitApp
