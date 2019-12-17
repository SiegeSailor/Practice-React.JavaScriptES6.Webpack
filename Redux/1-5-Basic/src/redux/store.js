import { createStore } from 'redux';
import reducer from './reducers/main.js'

const store = createStore(reducer, {counter: 0})

export default store;