import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'



import configureStore from './store/configureStore'

import './static/css/common.less'    
import './static/css/font.css'

import RouteMap from './router/routeMap'
import history from './router/history'

// import  './static/js/flexible/flexible.js'

import('./static/js/flexible/flexible.js').then((res)=> res) //按需加载第三方插件
// 创建 Redux 的 store 对象
const store = configureStore()

// Create a browser history
 
 
render(
    <Provider store={store}>
        <RouteMap history={history} />
    </Provider>,
    document.getElementById('root')
)


