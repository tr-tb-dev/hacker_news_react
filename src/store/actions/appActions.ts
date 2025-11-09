import { makeActionCreator } from '@/utils/actions/makeActionCreator'

export const initApp = makeActionCreator('APP_INIT')
export const dataLoaded = makeActionCreator('APP_DATA_LOADED')
