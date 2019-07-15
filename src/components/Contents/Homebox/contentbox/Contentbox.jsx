/* eslint-disable jsx-a11y/anchor-is-valid */
// 内容公共组件
import React, { Component } from 'react';
export default class ContentBoxs extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className='contextBox'>
                <div className={`titlebox ${this.props.titleName}` || 'titlebox'}>
                    {this.props.title}
                </div>
                <div className='conBoxText'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}