import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

import history from 'router/history'
 
console.log('加载城市')
class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
 
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    shouldComponentUpdate(pro) {
       console.log(pro)
       console.log("pro")
    }
    componentWillReceiveProps(nextProps) { //当props发生变化的时候执行
        console.log(nextProps)
         console.log(this.props.userinfo)
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        // 修改 redux
        const userinfo = this.props.userinfo
        console.log(userinfo)
        userinfo.cityName = newCity;
        let newUserInfo =  Object.assign({}, this.props.userinfo);
        newUserInfo.cityName = newCity

        this.props.userInfoActions.update(newUserInfo)

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)

        // 跳转页面
        // history.push('/')
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    console.log(state)
    console.log('===================')
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps //建立 UI 组件的参数到store.dispatch方法的映射
)(City) //connect方法生成容器组件。
