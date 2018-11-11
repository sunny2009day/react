import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

 

import './style.less'

class CurrentCity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        )
    }
    componentWillReceiveProps() { //当props发生变化的时候执行
   
   }
}
export default CurrentCity

 