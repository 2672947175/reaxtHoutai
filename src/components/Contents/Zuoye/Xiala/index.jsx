/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable array-callback-return */
// 下拉列表页
import React, { Component } from 'react';
import './xian.scss'
import arrlist from './xiala.json'

export default class Renyuan extends Component {


	constructor() {
		super()
		this.state = {
			arrs: {},
			arrlist,
		}

	}


	componentWillMount() {
		// 获取需要使用几开关
		let arrs = {}
		this.state.arrlist.map((item) => {
			if (item.ars) {
				arrs[item.id] = {
					shou: false
				}
				item.ars.map((item) => {
					if (item.ars) {
						arrs[item.id] = {
							shou: false
						}
					}
				})
			}
		})
		this.setState({
			arrs
		})
	}
	// 点击显示隐藏
	btnshow = (id) => {
		this.state.arrs[id] = {
			shou: !this.state.arrs[id].shou
		}
		this.setState({
			arrs: this.state.arrs
		})
	}

	render() {

		return (
			<div className="Libox">
				{/* 第一级导航 */}
				<ul className="ul2">
					{
						this.state.arrlist.map((item) => {
							return (
								<li className="li1" key={item.id}>
									{
										item.ars ? <div onClick={() => { this.btnshow(item.id) }}>{item.title}</div> : <div>{item.title}</div>
									}

									{/* 第二级导航 */}
									{
										item.ars && <ul className={this.state.arrs[item.id].shou ? "ul2 show" : "ul2 none"}>
											{
												item.ars && item.ars.map((items, indexs) => {
													return (
														<li key={indexs}>
															{items.ars ? <div onClick={() => { this.btnshow(items.id) }}>{items.title}</div> : <div>{items.title}</div>}

															{/* 第三级导航 */}
															{
																items.ars && <ul className={this.state.arrs[items.id].shou ? "ul2 show" : "ul2 none"}>
																	{
																		items.ars && items.ars.map((itemsd, indexsd) => {
																			return (
																				<li key={indexsd}>
																					<div>{itemsd.title}</div>
																				</li>
																			)
																		})
																	}
																</ul>
															}

														</li>
													)
												})
											}
										</ul>
									}
								</li>
							)
						})
					}
				</ul>
			</div>



		)
	}
}