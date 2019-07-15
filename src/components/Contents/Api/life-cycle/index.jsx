import React, { Component } from 'react'
import Highlight from 'react-highlight.js'
import '../../../../assets/style/highlidht.css'
import ContentBoxs from '../../Homebox/contentbox/Contentbox'
import './Apizj.scss'
export default class ApiClass extends Component {

	render() {

		return (
			<div className="boxText">
				<ContentBoxs title="render() 方法是 class 组件中唯一必须实现的方法" titleName='titleName'>
					<div>
						<div className="textBox">
							当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：
                        </div>
						<div className="textBox">
							render() 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。
						</div>
						<div className="textBox">
							如需与浏览器进行交互，请在 componentDidMount() 或其他生命周期方法中执行你的操作。保持 render() 为纯函数，可以使组件更容易思考
						</div>
						<Highlight language="class">
							{
								`
	render()
    `
							}
						</Highlight>
					</div>
				</ContentBoxs>

				<ContentBoxs title="constructor() 初始化生命周期" titleName='titleName'>
					<div>
						<div className="textBox">
							如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
                        </div>
						<div className="textBox">
							在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。
						</div>
						<Highlight language="class">
							{
								`
	constructor(props) {
		super(props);
		// 不要在这里调用 this.setState()
		this.state = { counter: 0 };
		this.handleClick = this.handleClick.bind(this);
	}
    `
							}
						</Highlight>
					</div>
				</ContentBoxs>

				<ContentBoxs title="componentDidMount 组件挂载挂载后函数" titleName='titleName'>
					<div>
						<div className="textBox">
							componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。
                        </div>
						<Highlight language="class">
							{
								`
	componentDidMount()
    `
							}
						</Highlight>
					</div>
				</ContentBoxs>



				<ContentBoxs titleName='titleName' title="componentDidUpdate 组件更新后函数">
					<div>
						<div className="textBox">
							当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）
                        </div>
						<Highlight language="class">
							{
								`
    componentDidUpdate(prevProps) {
        // 典型用法（不要忘记比较 props）：
        if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
        }
    }
    `
							}
						</Highlight>
					</div>
				</ContentBoxs>
				<ContentBoxs titleName='titleName' title="componentWillUnmount()  会在组件卸载及销毁之前直接调用">
					<div>
						<div className="textBox">
							componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。
                        </div>
						<div className="textBox">
							componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。
                        </div>
						<Highlight language="class">
							{
								`
	componentWillUnmount()
    `
							}
						</Highlight>
					</div>
				</ContentBoxs>
			</div>
		)
	}
}