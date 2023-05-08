import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import todosReducer from '../services/reducers/todosReducer'

const combinedReducer = combineReducers({todos: todosReducer})
export const store = configureStore({reducer: combinedReducer, devTools: {name: 'Store'}})
