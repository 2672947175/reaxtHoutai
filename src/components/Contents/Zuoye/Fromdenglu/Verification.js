export default (param, pandName) => {
    let { userName, passWord, passWordEnd, email } = param
    if (pandName === 'login') {
        if (userName === "" || userName.length < 2) {
            return {
                status: false,
                msg: '您的用户名不能为空，并且长度不小于2位'
            }
        }
        if (passWord === "" || passWord.length < 6) {
            return {
                status: false,
                msg: '您的密码不能为空，并且长度不小于6位'
            }
        }
    } // loginIf end
    if (pandName === 'register') {
        if (userName === "" || userName.length < 2) {
            return {
                status: false,
                msg: '您的用户名不能为空，并且长度不小于2位'
            }
        }
        const reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        if (email === "" || !reg.test(email)) {
            return {
                status: false,
                msg: '您的邮箱不能为空，并且不符合规则'
            }
        }
        if (passWord === "" || passWord.length < 6) {
            return {
                status: false,
                msg: '您的密码不能为空，并且长度不小于6位'
            }
        }
        if (passWordEnd !== passWord) {
            return {
                status: false,
                msg: '您的两次密码不相同，请检查'
            }
        }
    } // registerIf end



    return {
        status: true,
        msg: pandName === 'login' ? "登录成功" : '注册成功'
    }
}