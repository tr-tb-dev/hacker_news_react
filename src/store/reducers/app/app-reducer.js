import { dataLoaded } from '@/store/actions/appActions'

const initialState = {
  isLoading: true,
}

const _dataLoaded = (state) => ({
  ...state,
  isLoading: false,
})

const reducers = {
  [dataLoaded.type]: _dataLoaded,
}

const appReducer = (state = initialState, action) =>
  reducers[action.type] ? reducers[action.type](state, action) : state

export default appReducer
