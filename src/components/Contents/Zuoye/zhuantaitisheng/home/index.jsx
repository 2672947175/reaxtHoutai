import React, { Component } from 'react'
import LeftBox from '../leftbox'
import RightBox from '../rightbox'
import './home.scss'
export default class StateUpgra extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zhu: false,
            zi: false,
            you: false,
        }
    }
    clickage = (is) => {
        const { zhu, zi, you } = this.state
        console.log(is)
        let color
        if (is === 'zhu') {
            color = !zhu
        } else if (is === 'zi') {
            color = !zi
        } else {
            color = !you
        }
        this.setState({
            [is]: color
        })
    }
    render() {
        const { zhu, zi, you } = this.state
        return (
            <div className="box" style={{ background: zhu ? 'red' : 'darkturquoise' }}>
                <LeftBox clickage={this.clickage} zi={zi}></LeftBox>
                <RightBox you={you}></RightBox>
            </div>
        )
    }
}
