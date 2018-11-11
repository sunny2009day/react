import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {HashRouter } from 'react-router-dom'

import Header from '../../components/Header'
import Info from './subpage/Info'
import Buy from './subpage/buy'
import Comment from './subpage/Comment'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(context);

        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        //重写组件的shouldComponentUpdate函数，在每次更新之前判断props和state，如果有变化则返回true，无变化则返回false
 
    }
    render() {
        // 获取商户ID
        const id = this.props.match.params.id; //react4从match中获取传递的参数

        return (
            <div>
                <Header title="商户详情" type="share"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}
 
export default Detail