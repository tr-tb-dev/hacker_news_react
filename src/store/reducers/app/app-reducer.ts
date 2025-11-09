import { dataLoaded } from '@/store/actions/appActions';
import { Action } from '@/helpers/actionHelper';

export interface AppState {
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: true,
};

const _dataLoaded = (state: AppState): AppState => ({
  ...state,
  isLoading: false,
});

type ReducerMap = {
  [key: string]: (state: AppState, action: Action) => AppState;
};

const reducers: ReducerMap = {
  [dataLoaded.type]: _dataLoaded,
};

const appReducer = (state = initialState, action: Action): AppState =>
  reducers[action.type] ? reducers[action.type](state, action) : state;

export default appReducer;
