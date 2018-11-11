import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'
import {Prompt } from 'react-router'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.match.params
        console.log(params)
        console.log("哈哈哈哈")
        return (
            <div>
                <Prompt message={location => (
                    `Are you sue you want to go to ${location.pathname}?`
                )} />
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
}

export default Search