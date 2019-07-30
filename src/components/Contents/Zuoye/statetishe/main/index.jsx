import React from 'react';
import MyContext from '../MyContext'

export default () => {
    return (
        <div>
            <MyContext.Consumer>
                {
                    objs => {
                        const { obj, bg } = objs
                        return (
                            <div className="bgboxs" style={{ background: obj[bg].bg, color: obj[bg].color }}>
                                <div className="leftBoximg">
                                    <div className="neibox" style={{ background: obj[bg].bg, color: obj[bg].color }} >
                                        1
                                    </div>
                                    <div className="neibox" style={{ background: obj[bg].bg, color: obj[bg].color }} >
                                        2
                                    </div>
                                    <div className="neibox" style={{ background: obj[bg].bg, color: obj[bg].color }} >
                                        3
                                    </div>
                                    <div className="neibox" style={{ background: obj[bg].bg, color: obj[bg].color }} >
                                        4
                                    </div>
                                </div>
                                <div className="Stextbox">
                                    <div>
                                        觉得萨里看到吉安市里的空间萨来得快kc.jlkasdjaslklsj.salkdj 家里打卡时间打上来看大家ksa.djsalk简历卡萨丁拉可适当施蒂利克敬爱的就爱上了来看大家萨拉丁两款手机阿打算考虑倒计时啦肯德基。佳都科技沙拉数据进口量第三代
									</div>
                                    <div>
                                        觉得萨里看到吉安市里的空间萨来得快kc.jlkasdjaslklsj.salkdj 家里打卡时间打上来看大家ksa.djsalk简历卡萨丁拉可适当施蒂利克敬爱的就爱上了来看大家萨拉丁两款手机阿打算考虑倒计时啦肯德基。佳都科技沙拉数据进口量第三代
									</div>

                                </div>
                            </div>
                        )
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}
