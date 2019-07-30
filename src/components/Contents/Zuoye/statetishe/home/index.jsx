import React, { Component } from 'react'
import { getpage } from '../api'
import MyContext from '../MyContext'
import Header from '../header'
import Main from '../main'
import './home.scss'
export default class home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bg: 'red',
		}
		this.data = {
			red: {
				id: 1,
				color: '#fff',
				bg: 'red',
			},
		}
	}
	componentDidMount() {
		getpage().then(item => {
			this.data = item
			this.forceUpdate();
		})
	}
	// 修改主题事件
	btnBg = (item) => {
		this.setState({
			bg: item
		})
	}
	render() {
		const { bg } = this.state
		return (
			<div>
				<div className="box">
					<MyContext.Provider value={{ obj: this.data, bg: bg, btnBg: this.btnBg }}>
						<Header></Header>
						<Main></Main>
					</MyContext.Provider>
				</div>

			</div>
		)
	}
}
