import React from 'react';

export default (props) => {
    let { userName, onChangeValue, passWord, onRloader, onJump, yangzheng, verifn } = props
    return (
        <div>
            <form className="formcon">
                <label className='labelss'>
                    用户名：<input type="text" value={userName} name="userName" onChange={onChangeValue} />
                </label>
                <label className='labelss'>
                    密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" value={passWord} name="passWord" onChange={onChangeValue} />
                </label >

                {yangzheng ? <label className="from-label">
                    验证码：<input className="yan" type="text" value={verifn} name="verifn" onChange={onChangeValue} />
                </label> : <label></label>}

                <button className="btn" type="button" onClick={() => { onRloader('login') }}>登录</button>
                <button className="btn" type="button" onClick={onJump}>注册</button>

            </form>
        </div>


    )
}