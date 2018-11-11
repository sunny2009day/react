import { combineReducers } from 'redux'
import userinfo from './userinfo'
import store from './store'
console.dir(store)
export default combineReducers({
    userinfo,
    store
})
//用combineReducers分装各个reducer规则