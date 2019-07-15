/* eslint-disable jsx-a11y/anchor-is-valid */
// 内容 组件
import React, { Component } from 'react';

import ContentBoxs from '../contentbox/Contentbox'
import { aList, tdList } from './Home.json';
import './Content.scss'

export default class Contents extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    render() {
        // console.log(aList)
        return (
            <div className="conbox">
                <ul className="conulbox">
                    {
                        aList.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* <a href={item.aurl || "javascript:;"} target="_blank"> {item.text}</a> */}
                                    <a href={item.aurl}> {item.text}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ContentBoxs title="笔记摘要">
                    <ul>
                        {
                            aList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item.text}
                                    </li>
                                )
                            })
                        }

                    </ul>
                </ContentBoxs>

                <ContentBoxs title="版本信息">
                    <table>
                        <tbody>
                            {
                                tdList.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="tra">{item.title}</td>
                                            <td>{item.text}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </ContentBoxs>

                <ContentBoxs title="关于React">
                    <div>
                        关于React
                    </div>
                    <div>
                        特性：
                    </div>
                    <ul>
                        {
                            aList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item.text}
                                    </li>
                                )
                            })
                        }

                    </ul>
                </ContentBoxs>
            </div>

        )
    }
}