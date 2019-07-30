import React, { Component } from 'react'
import MyContext from '../MyContext'
export default class index extends Component {
    render() {
        return (
            <div>
                {/* 使用子组件 */}
                <MyContext.Consumer>
                    {
                        objs => {
                            const { obj, btnBg } = objs
                            let arr = []
                            for (var key in obj) {
                                arr = [...arr, key]
                            }

                            return (

                                <div className="btnCon">
                                    <div className="btnbox" >
                                        主题按钮：
											</div>

                                    {
                                        arr.map((item, index) => {
                                            return (
                                                <div className="btnbox"
                                                    onClick={() => { btnBg(item) }}
                                                    key={index}
                                                    style={{ background: obj[item].bg, color: obj[item].color }}
                                                > {item}</div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
