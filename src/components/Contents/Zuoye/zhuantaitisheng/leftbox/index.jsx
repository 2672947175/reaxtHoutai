import React, { Component } from 'react'

export default class leftBox extends Component {
    render() {
        return (
            <div className="leftbox">
                <div className="top">改变左边背景颜色</div>

                <div className='letbtnbox' style={{ background: this.props.zi ? 'orange' : 'chartreuse' }}>
                    <button onClick={() => { this.props.clickage('zhu') }}>改变主题颜色</button>
                    <button onClick={() => { this.props.clickage('zi') }}>改变自己颜色</button>
                    <button onClick={() => { this.props.clickage('you') }}>改变右边颜色</button>
                </div>
            </div>
        )
    }
}
