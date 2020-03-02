import React, {Component} from 'react';
import './Login.scss';
import {$} from 'jquery';

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
            testOutCome: {},
            usernameValid:'',
            phoneNumValid: '',
            validationCodeValid: '',
            passwordValid: '',
            validationTime: 60
        };
        this.loginModeChange = this.loginModeChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onValidationCodeChange = this.onValidationCodeChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.toRegister = this.toRegister.bind(this);
        this.countdown = this.countdown.bind(this);
        this.getValidationCode = this.getValidationCode.bind(this);
    }

    loginModeChange() {
        if (this.state.mode === 'phone') {
            this.setState({
                mode: 'username'
            });
        } else {
            this.setState({
                mode: 'phone'
            })
        }
    }

    onUsernameChange(e) {
        if (e.target.value === '') {
            this.setState({usernameValid: "请输入用户名"});
            e.target.className = "form-control is-invalid";
        } else {
            this.setState({usernameValid: ""});
            e.target.className = "form-control is-valid";
        }
    }

    onPhoneNumberChange(e) {
        if (e.target.value === '') {
            this.setState({phoneNumValid: "请输入手机号"});
            e.target.className = "form-control is-invalid";
        } else if (!/^1[3456789]\d{9}$/.test(e.target.value)) {
            this.setState({phoneNumValid: "请输入正确的手机号"});
            e.target.className = "form-control is-invalid";
        } else {
            this.setState({phoneNumValid: ""});
            e.target.className = "form-control is-valid";
        }
    }

    onValidationCodeChange(e) {
        if (e.target.value === '') {
            this.setState({validationCodeValid: "请输入验证码"});
            e.target.className = "form-control is-invalid";
        } else if (!/^\d{6}$/.test(e.target.value)) {
            this.setState({validationCodeValid: "请输入正确的验证码"});
            e.target.className = "form-control is-invalid";
        } else {
            this.setState({validationCodeValid: ""});
            e.target.className = "form-control is-valid";
        }
    }

    onPasswordChange(e) {
        if (e.target.value === '') {
            this.setState({passwordValid: "请输入密码"});
            e.target.className = "form-control is-invalid";
        } else {
            this.setState({passwordValid: ''});
            e.target.className = "form-control is-valid";
        }
    }

    toRegister() {
        this.props.history.push("/auth/register");
    }

    getValidationCode(e) {
        let that = this;
        let phonenumber = document.getElementById("inputPhoneNumber");
        let t;
        if(phonenumber.value.length === 0){
            alert("请输入手机号码");
        }else{
            if(!(/^1[34578]\d{9}$/.test(phonenumber.value))){
                alert("手机号码有误，请重填")
            }else{
                //按照指定的周期（以毫秒计）来调用函数或计算表达式。
                //最好是在ajax请求之后再调用函数
                t = setInterval(function () {
                    that.countdown(e, t)
                }, 1000);
                alert("获取验证码成功");
                //获取验证码成功后调用倒计时函数
                that.countdown(e, t);
            }
        }
    }

    countdown(e, t){
        if (this.state.validationTime === 0 && document.getElementById("getcode")) {
            //这里时设置当时间到0的时候重新设置点击事件，并且默认time修改为60
            document.getElementById("getcode").innerText="获取验证码";
            this.setState({validationTime: 60});
            clearInterval(t);
            document.getElementById("getcode").removeAttribute("disabled");
        }else if (this.state.validationTime !== 0 && document.getElementById("getcode")){
            //这里是显示时间倒计时的时候点击不生效
            document.getElementById("getcode").setAttribute("disabled", "disabled");
            document.getElementById("getcode").innerHTML="重新发送"+this.state.validationTime;
            this.state.validationTime--;
        }
    }

    render() {
        return (
            <div className="container">
                <br/><br/>
                <div className="text-center mb-4">
                    <img className="mb-4" src="https://v4.bootcss.com/docs/assets/brand/bootstrap-solid.svg"
                         alt="" width="72"
                         height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">尹记通讯</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" onClick={this.loginModeChange}>{this.state.mode === 'phone' ? "账号密码登录" : "手机验证码登录"}</button>
                        <button type="button" className="btn btn-secondary" onClick={this.toRegister}>注册账号</button>
                    </div>
                </div>
                <div className="col-md-8 order-md-1">
                    {this.state.mode === "username" ? (
                        <form className="form-signin needs-validation">
                            <div className="form-label-group">
                                <label htmlFor="inputUsername">手机号或邮箱</label>
                                <input type="text" id="inputUsername" className="form-control" placeholder="请输入手机号或邮箱"
                                       required="" autoFocus="" onBlur={this.onUsernameChange}/>
                                <div className="invalid-feedback">
                                    {this.state.usernameValid}
                                </div>
                            </div>
                            <br/>
                            <div className="form-label-group">
                                <label htmlFor="inputPassword">密码</label>
                                <input type="password" id="inputPassword" className="form-control"
                                       placeholder="请输入密码" required="" onBlur={this.onPasswordChange}/>
                                <div className="invalid-feedback">
                                    {this.state.passwordValid}
                                </div>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" defaultValue="remember-me"/>记住密码
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block">登录</button>
                            <br/>
                            <br/>
                            <br/>
                        </form>
                    ) : (
                        <form className="form-signin needs-validation">
                            <div className="form-label-group">
                                <label htmlFor="inputPhoneNumber">手机号</label>
                                <input type="text" id="inputPhoneNumber" className="form-control" placeholder="请输入您的手机号"
                                       required="" autoFocus="" onBlur={this.onPhoneNumberChange}/>
                                <div className="invalid-feedback">
                                    {this.state.phoneNumValid}
                                </div>
                            </div>
                            <button type="button" id="getcode" className="btn btn-light validation" onClick={this.getValidationCode}>获取验证码</button>
                            <div className="form-label-group">
                                <br/>
                                <label htmlFor="inputPassword">验证码</label>
                                <input type="text" id="inputPassword" className="form-control"
                                       placeholder="验证码" required="" onBlur={this.onValidationCodeChange}/>
                                <div className="invalid-feedback">
                                    {this.state.validationCodeValid}
                                </div>
                            </div>
                            <br/>
                            <button className="btn btn-primary btn-lg btn-block" onClick={this.toRegister}>登录</button>
                            <br/>
                            <br/>
                            <br/>
                        </form>
                    )}

                </div>
            </div>
        );
    }
}

export default Login;
