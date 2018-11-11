import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { BrowserRouter, HashRouter } from 'react-router-dom'
 

import history from 'router/history'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        //有一个生命周期 hook 叫做shouldComponentUpdate，组件每次更新之前,
        //都要过一遍这个函数，如果这个函数返回true则更新，如果返回false则不更新。
        //而默认情况下，这个函数会一直返回true，就是说，如果有一些无效的改动触发了这个函数，也会导致无效的更新
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
    clickHandle() {

        const backRouter = this.props.backRouter
 
        // history.push('/city'); //可行
        if (backRouter) {
            history.push('/city'); //这里
        } else {
            window.history.back();
        }
    }
}

export default Header