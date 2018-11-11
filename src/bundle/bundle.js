import React from 'react'

export default class Bundle extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) { //当props属性更改时
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        //注意这里，使用Promise对象; mod.default导出默认
        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }
    render() {
        return this.state.mod ?this.props.children(this.state.mod): null; //不想写这么复杂
        //this.props.children(this.state.mod)
        //this.props.children 属性。它表示组件的所有子节点
    }
    // render() {
    //     console.dir(  this.state.mod ?this.state.mod:null)
    //     return (
    //         this.state.mod ?this.state.mod : null

    //     )
    // }
}

 