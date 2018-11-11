import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { BrowserRouter } from 'react-router-dom'
 

import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

import LocalStore from '../../util/localStore'
import { USERNAME } from '../../config/localStoreKey'
import history from 'router/history'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render() {
        return (
            <div className="login-wrap">
                <Header title="登录"/>
                {
                    // 等待验证之后，再显示登录信息
                    this.state.checking
                    ? <div>{/* 等待中 */}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount() {
        // 判断是否已经登录
        this.doCheck()
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({
                checking: false
            })
        }
    }
    // 处理登录之后的事情
    loginHandle(username) {
        // 保存用户名
        console.log('点击登录之后');
        const actions = this.props.userInfoActions
        // let userinfo = this.props.userinfo
        
        let userinfo = Object.assign({},this.props.userinfo)
        userinfo.username = username //react中，不是根据数据内容变化来判断是否变化，而是根据数据的引用是否变化。
        //而这里this.propsuserinfo是一个数组，数组内容发生变化，可是引用没变，所以react认为它没变
        actions.update(userinfo) //更新redux中的userinfo信息

        const params = this.props.match.params //reqct-router4路由传递的参数在props.match里面
        const router = params.router
        LocalStore.setItem(USERNAME, username)
        if (router) {
            // 跳转到指定的页面

 
             history.push(router)
        } else {
            // 跳转到用户主页
            this.goUserPage()
        }
    }
    goUserPage() {
        history.push('/User')
        console.log(this.props.history)
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    console.log(state.userinfo)
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
    mapDispatchToProps
)(Login)