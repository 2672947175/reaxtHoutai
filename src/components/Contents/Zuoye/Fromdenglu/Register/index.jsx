import React from 'react';

export default (props) => {
    let { userName, onChangeValue, passWord, onRloader, passWordEnd, email } = props
    return (
        <div>
            <form className="formcon">
                <label>
                    用户名：<input type="text" value={userName} name="userName" onChange={onChangeValue} />
                </label>
                <label>

                    邮&nbsp;&nbsp;&nbsp;&nbsp;箱：<input type="email" value={email} name="email" onChange={onChangeValue} />
                </label>
                <label>
                    密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" value={passWord} name="passWord" onChange={onChangeValue} />
                </label>
                <label>
                    确认密码：<input type="password" value={passWordEnd} name="passWordEnd" onChange={onChangeValue} />
                </label>


                <button className="btn" type="button" onClick={() => { onRloader('register') }}>注册</button>
                {/* <button className="btn" type="button" onClick={onJump}>登录</button> */}

            </form>
        </div>


    )
}