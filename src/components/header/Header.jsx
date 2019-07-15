/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Header.scss'
import Topimg from '../../assets/images/top.jpg'
export default class HeaderText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HederTanShow: false,
            show: false,

        }
    }
    HederTanShow = () => {
        this.setState({
            HederTanShow: !this.state.HederTanShow
        })
    }
    showHout = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div className='header flex flex-bw' style={{ background: this.props.headerBg }}>
                <div className="flex " >
                    {/* 左右按钮 */}
                    <div className="anNu" onClick={this.props.toggle}>
                        {
                            this.props.collapsed ? <i className="iconfont icon-shuangyoujiantou-"></i> : <i className="iconfont icon-shuangzuojiantou-"></i>
                        }
                    </div>
                    <div className="anNu txtSz">
                        React后台管理
                   </div>
                </div>
                <div className="anNu txtSz mrgt anbox" onClick={this.HederTanShow}>
                    {/* 头像 */}
                    <img className="imgs mrgt" src={Topimg} />
                    vars
                   <span className="span">
                        <i className="iconfont icon-xiajiantou"></i>
                    </span>
                    <div className={this.state.HederTanShow ? "HederTan HederTanShow" : "HederTan"}>
                        <div className="boxa">个人中心 <div className="yin"></div></div>
                        <div className="boxa" onClick={this.showHout}>设置 <div className="yin"></div></div>
                        <div className="boxa">注销 <div className="yin"></div></div>
                    </div>


                </div>
                <div className={this.state.show ? 'pocont' : 'pocontnon'} onClick={this.showHout}>

                </div>
                <div className={this.state.show ? 'opbox poribox' : 'opbox'}>
                    <div className='colorbox'>
                        {
                            this.props.colorList.map((item) => {
                                return (
                                    <div className="colormin" key={item.id} onClick={() => { this.props.Bgbtn(item) }}>
                                        <div className="header-box" style={{ background: item.headerCol }}></div>
                                        <div className="shider-box" style={{ background: item.shiderCol }}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}