import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import HeaderText from '../header/Header'
import Shiders from '../ShiderLans'
import Contents from '../Contents'

const { Header, Sider, Content } = Layout;


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false,
      ModuleName: 'ShouYe',

      theme: 'dark',
      headerBg: 'red',
      colorList: [
        {
          id: 'hei1',
          headerCol: "orange",
          shiderCol: '#000',
          theme: 'dark'
        },
        {
          id: 'hei2',
          headerCol: "orangered",
          shiderCol: '#000',
          theme: 'dark'

        },
        {
          id: 'hei3',
          headerCol: "chartreuse",
          shiderCol: '#000',
          theme: 'dark'
        },
        {
          id: 'hei4',
          headerCol: "mediumorchid",
          shiderCol: '#000',
          theme: 'dark'
        },
        {
          id: 'bai5',
          headerCol: "mediumorchid",
          shiderCol: '#fff',
          theme: 'light'
        },
        {
          id: 'bai6',
          headerCol: "orange",
          shiderCol: '#fff',
          theme: 'light'
        },
        {
          id: 'bai7',
          headerCol: "orangered",
          shiderCol: '#fff',
          theme: 'light'
        },
        {
          id: 'bai8',
          headerCol: "chartreuse",
          shiderCol: '#fff',
          theme: 'light'
        }
      ]
    }

  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  onCtext = (link) => {
    this.setState({
      ModuleName: link
    })
  }
  Bgbtn = (item) => {
    this.setState({
      theme: item.theme,
      headerBg: item.headerCol,
    })
  }
  render() {
    return (
      <div>
        <Layout className="AppBox">
          <Header className="HeaderBox">
            <HeaderText headerBg={this.state.headerBg} Bgbtn={this.Bgbtn} colorList={this.state.colorList} toggle={this.toggle} collapsed={this.state.collapsed}></HeaderText>

          </Header>
          <Layout>
            <Sider theme={this.state.theme} className="SiderBox" width='250' collapsedWidth='0' trigger={null} collapsible collapsed={this.state.collapsed}>
              <Shiders theme={this.state.theme} onCtext={this.onCtext}></Shiders>
            </Sider>
            <Content className="ContentBox">
              <Contents ModuleName={this.state.ModuleName}></Contents>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

