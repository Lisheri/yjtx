import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            veriCode: "",
            //用户名,email,手机号
            //mode==='veriMode' 用手机验证码登录
            mode: 'username',
            //输入验证
            testOutCome: {}
        }
    }
    render() {
        return (
            <div>
                z户厕
            </div>
        );
    }
}

export default Login;
