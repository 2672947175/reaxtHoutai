/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import Verification from './Verification'
import './index.scss'
export default class Fromdeng extends Component {
	constructor() {
		super()
		this.state = {
			userName: '',
			passWord: '',
			email: '',
			passWordEnd: '',
			verifn: '',
			show: true,
			dengShow: true,
			yan: 0,
			yangzheng: false,

		}
	}
	// 设置value值
	onChangeValue = ({ target }) => {
		// console.log(target)
		this.setState({
			[target.name]: target.value
		})
	}
	// 登录注册
	onRloader = (pandName = 'login') => {
		if (pandName === 'login') {
			let as = this.state.yan++
			if (!this.state.yangzheng) {
				if (as >= 1) {
					this.setState({
						yangzheng: true
					})
				}
			}

		}

		let vif = Verification(this.state, pandName)
		// console.log(vif)
		if (vif.status) {
			alert(vif.msg)
			if (pandName === 'register') {
				this.setState({
					show: true
				})
			}
			if (pandName === 'login') {
				this.setState({
					dengShow: false
				})
			}
		} else {
			alert(vif.msg)
		}


	}
	onJump = () => {
		this.setState({
			show: !this.state.show
		})
	}
	render() {
		let { userName, passWord, passWordEnd, email, show, dengShow, verifn, yangzheng } = this.state
		return (
			<div className={dengShow ? 'form-box' : 'form-box none'}>
				{/* 登录组件 */}
				{show ? <Login userName={userName}
					yangzheng={yangzheng}
					passWord={passWord}
					verifn={verifn}
					onChangeValue={this.onChangeValue}
					onRloader={this.onRloader}
					onJump={this.onJump}
				></Login> : <Register userName={userName}
					passWord={passWord}
					passWordEnd={passWordEnd}
					email={email}
					onChangeValue={this.onChangeValue}
					onRloader={this.onRloader}
				// onJump={this.onJump}
				></Register>}
			</div>
		)
	}
}