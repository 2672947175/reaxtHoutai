
import React, { Component } from 'react';
import shiderlist from '../../mock/Shiderlans.json'

import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import Shityle from './index.module.scss';

const { SubMenu } = Menu;

export default class Shiders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shiderlist
        }
    }
    render() {

        return (
            <div id={Shityle.shiders}>
                <Menu

                    style={{ width: '100%' }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode='inline'
                    theme={this.props.theme}
                >
                    {
                        this.state.shiderlist.map((item, index) => {
                            return item.type ? <SubMenu
                                key={item.id}
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>{item.text}</span>
                                    </span>
                                }
                            >
                                {
                                    item.menLsit.map((items) => {
                                        return <Menu.Item key={items.id} onClick={() => { this.props.onCtext(items.name) }}> {items.text}</Menu.Item>
                                    })
                                }
                            </SubMenu> : <Menu.Item key={item.id} onClick={() => { this.props.onCtext(item.name) }}>
                                    <Icon type={item.icons} />
                                    {item.text}
                                </Menu.Item>
                        })
                    }
                </Menu>
            </div>
        )
    }
}