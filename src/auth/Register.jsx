import React, { Component } from 'react';
import './Login.scss'

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
            phoneNumValid: '',
            validationCodeValid: '',
            emailValid: '',
            passwordValid: '',
            passwordValid2: '',
            validationTime: 60,

        };
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.onValidationCodeChange = this.onValidationCodeChange.bind(this);
        this.onKeyUpNumber = this.onKeyUpNumber.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.isPasswordRight = this.isPasswordRight.bind(this);
        this.testPasswordstrength = this.testPasswordstrength.bind(this);
        this.toLogin = this.toLogin.bind(this);
        this.countdown = this.countdown.bind(this);
        this.getValidationCode = this.getValidationCode.bind(this);
    }

    onKeyUpNumber(e) {
        e.target.value = e.target.value.replace(/[^\d]/g,'')
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

    onEmailChange(e) {
        if (e.target.value === '') {
            this.setState({emailValid: '请输入邮箱'});
            e.target.className = "form-control is-invalid";
        } else if (!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.(com)$/.test(e.target.value)){
            this.setState({emailValid: '请有效的邮箱'});
            e.target.className = "form-control is-invalid";
        } else {
            this.setState({emailValid: ''});
            e.target.className = "form-control is-valid";
        }
    }

    onPasswordChange(e) {
        if (e.target.value === '') {
            this.setState({passwordValid: "请输入密码"});
            e.target.className = "form-control is-invalid";
        } else if (!/^[a-zA-Z0-9._+=!,?]{6,12}$/.test(e.target.value)) {
            this.setState({passwordValid: "请输入6-12位且特殊字符仅包含('.', '_', '+', '=', '!', '?', ',')的正确密码"});
            e.target.className = "form-control is-invalid";
        } else {
            this.setState({passwordValid: ''});
            e.target.className = "form-control is-valid";
        }
    }

    isPasswordRight(e) {
        if (e.target.value === '') {
            this.setState({passwordValid2: "请输入密码"});
            e.target.className = "form-control is-invalid";
        } else if (e.target.value !== document.querySelector("#inputPassword").value) {
            this.setState({passwordValid2: "请确认两次密码是否相同"});
            e.target.className = "form-control is-invalid";
        } else {
            this.setState({passwordValid2: ''});
            e.target.className = "form-control is-valid";
        }
    }


    testPasswordstrength(e) {
        if (/^[0-9]{6,12}$|^[a-z]{6,12}$|^[A-Z]{6,12}$/.test(e.target.value)) {
            document.querySelector(".progress-bar-danger").style.width = "33%";
            document.querySelector(".progress-bar-warning").style.width = "0";
            document.querySelector(".progress-bar-success").style.width = "0";
        } else if (/^(?=.*\d)(?=.*[a-z])[a-z0-9]{6,12}$|^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{6,12}$|^(?=.*\d)(?=.*[A-Z])[A-Z0-9]{6,12}$|^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,12}$|^(?=(.*[._+=!,?]){1,})(?=(.*[a-z]){1,})(?=(.*[\d]){1,})[a-z0-9,_+=!.?]{6,12}$|^(?=(.*[._+=!,?]){1,})(?=(.*[A-Z]){1,})(?=(.*[\d]){1,})[A-Z0-9,_+=!.?]{6,12}$|^(?=(.*[._+=!,?]){1,})(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})[A-Za-z,_+=!.?]{6,12}$/.test(e.target.value)) {
            document.querySelector(".progress-bar-danger").style.width = "33%";
            document.querySelector(".progress-bar-warning").style.width = "33%";
            document.querySelector(".progress-bar-success").style.width = "0";
        } else if (/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[._+=!,?]){1,})[a-zA-Z0-9._+=!,?]{6,12}$/.test(e.target.value)) {
            document.querySelector(".progress-bar-danger").style.width = "33%";
            document.querySelector(".progress-bar-warning").style.width = "33%";
            document.querySelector(".progress-bar-success").style.width = "34%";
        } else {
            document.querySelector(".progress-bar-danger").style.width = "0";
            document.querySelector(".progress-bar-warning").style.width = "0";
            document.querySelector(".progress-bar-success").style.width = "0";
        }
    }

    toLogin() {
        this.props.history.push("/auth/login");
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
                    <button type="button" className="btn btn-secondary" onClick={this.toLogin} style={{width: "9em"}}>返回登录</button>
                </div>
                <form className="form-signin needs-validation">
                    <div className="form-label-group">
                        <label htmlFor="inputPhoneNumber">手机号</label>
                        <input type="text" id="inputPhoneNumber" className="form-control" placeholder="请输入手机号"
                               required="" autoFocus=""
                               onBlur={this.onPhoneNumberChange}
                               onKeyUp={this.onKeyUpNumber}
                               onKeyPress={this.onKeyUpNumber}
                               onKeyDown={this.onKeyUpNumber}
                        />
                        <div className="invalid-feedback">
                            {this.state.phoneNumValid}
                        </div>
                    </div>
                    <button type="button" id="getcode" className="btn btn-light validation" onClick={this.getValidationCode}>获取验证码</button>
                    <div className="form-label-group">
                        <br/>
                        <label htmlFor="inputValidationCode">手机验证码</label>
                        <input type="text" id="inputValidationCode" className="form-control"
                               placeholder="请输入手机验证码" required=""
                               onKeyUp={this.onKeyUpNumber}
                               onKeyPress={this.onKeyUpNumber}
                               onKeyDown={this.onKeyUpNumber}
                               onBlur={this.onValidationCodeChange}
                        />
                        <div className="invalid-feedback">
                            {this.state.validationCodeValid}
                        </div>
                    </div>
                    <div className="form-label-group">
                        <br/>
                        <label htmlFor="inputEmail">邮箱</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="请输入您的邮箱"
                               required="" autoFocus="" onBlur={this.onEmailChange}/>
                        <div className="invalid-feedback">
                            {this.state.emailValid}
                        </div>
                    </div>
                    <div className="form-label-group">
                        <br/>
                        <label htmlFor="inputPassword">创建密码</label>
                        <input type="password" id="inputPassword" className="form-control"
                               placeholder="请输入密码" required="" onBlur={this.onPasswordChange}
                               onKeyUp={this.testPasswordstrength}
                        />
                        <div className="invalid-feedback">
                            {this.state.passwordValid}
                        </div>
                    </div>
                    <div id="pwmsg-box" className="center-block ">
                        <span>密码强度</span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger active " style={{width: "0%"}}></div>
                            <div className="progress-bar progress-bar-warning progress-bar-striped" style={{width: "0%"}}>
                                <span className="sr-only">30% Complete (warning)</span></div>
                            <div className="progress-bar progress-bar-success" style={{width: "0%"}}><span
                                className="sr-only">40% Complete (danger)</span></div>
                        </div>
                    </div>
                    <br/>
                    <div className="form-label-group">
                        <br/>
                        <label htmlFor="inputPassword2">确认密码</label>
                        <input type="password" id="inputPassword2" className="form-control"
                               placeholder="请再次输入密码" required="" onBlur={this.isPasswordRight}
                        />
                        <div className="invalid-feedback">
                            {this.state.passwordValid2}
                        </div>
                    </div>
                    <br/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">注册</button>
                    <br/>
                    <br/>
                    <br/>
                </form>
            </div>
        );
    }
}

export default Login;
