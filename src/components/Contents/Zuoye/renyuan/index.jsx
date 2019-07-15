// 人员查询列表首页
import React, { Component } from 'react';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import RenStyle from './renyuan.module.scss'
import { lsist } from './renyuan.json'
import Contentbox from './contentbox'
const { Header, Sider, Content } = Layout;

export default class Renyuan extends Component {
    constructor() {
        super()
        this.state = {
            isId: 'sy01',
        }
    }
    onbtn = (id) => {
        this.setState({
            isId: id
        })
    }

    render() {

        return (
            <div className={RenStyle.renbox}>

                {/* 头部 */}
                <Header className={RenStyle.box}>社会人资料查询系统</Header>
                <Layout className={RenStyle.conbox}>
                    {/* 侧边导航 */}
                    <Sider className={RenStyle.siderbox} width='300'>
                        <ul >
                            {
                                lsist.map(item => {
                                    return (<li key={item.id} onClick={() => { this.onbtn(item.id) }}>{item.title}</li>)
                                })
                            }
                        </ul>
                    </Sider>
                    {/* 右侧内容 */}
                    <Content>
                        <Contentbox isId={this.state.isId}></Contentbox>
                    </Content>
                </Layout>

            </div>



        )
    }
}