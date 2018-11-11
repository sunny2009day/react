import React from 'react'
// Single page app routing
import { Route, Switch } from 'react-router'
import { Router } from 'react-router-dom'
import App from '../containers'
import Home from '../containers/Home'
// import City from '../containers/City'
// import City from '../containers/City'

import Login from '../containers/Login'
import User from '../containers/User'
// import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

import Bundle from 'bundle/bundle'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps
 
const City = (props) => (
    <Bundle load={() => import('../containers/City')}>
     {(City)=><City {...props}/>}
    </Bundle>
);
const Search = (props) => (
    <Bundle load={() => import('../containers/Search')}>
     {(Search) => <Search {...props}/>}
    </Bundle>
);
 
 

 
class RouterMap extends React.Component {
    render() {
        return (
            
            <Router history={this.props.history}>
                <div className="router-wrap">
                   <App history={this.props.history}></App>
                    <Route  path="/" render={() => (
                            <Switch>
                            {/*<Switch>只找到第一个被location匹配到的<Route>就立即停止继续匹配，并且把它渲染出来。*/}
                                <Route exact path="/" component={Home} />
                                <Route path='/city' component={City} />
                                <Route path='/Login/:router?' component={Login} />
                                <Route path='/User' component={User} />
                                <Route path='/search/:category/:keyword?' component={Search} />
                   
                                <Route path='/detail/:id' component={Detail} />
                                <Route path='*' component={NotFound} />
                            </Switch>
                          
                    )} />
                  
              </div>  
            </Router>
        )
    }
}
 

export default RouterMap
