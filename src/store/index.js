import {compose, createStore, applyMiddleware, combineReducers} from "redux"
import mainReducer from "../reducers/jobsReducer.js"
import thunk from "redux-thunk"
import favouriteReducer from "../reducers/favouriteReducer.js"
import jobsReducer from "../reducers/jobsReducer.js"
import {persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"
import dotenv from "dotenv/config"

const aComposeFunctionThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  data: {
    favourites : [],
    loading: true,
  },
  jobs: {
    content: [],
    error: false,
    loading: true,
  }
}

const persistConfig = {
  key: "root",
  storage,
  transforms: [
      encryptTransform({
          secretKey: process.env.REACT_APP_ENCRYPTION_KEY,
      })
  ] 
  }

const bigReducer = combineReducers({
  data: favouriteReducer,
  jobs: jobsReducer
})

const persistedBigReducer = persistReducer(persistConfig, bigReducer)



export const configureStore = createStore(persistedBigReducer,initialState, aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk)))

export const persistor = persistStore(configureStore)
