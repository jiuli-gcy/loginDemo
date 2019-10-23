import React, { Component } from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';
//import axios from 'axios';

export default class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    static propTypes = {
        userSignupRequest:PropTypes.func.isRequired
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        //axios.post('api/users',{user:this.state})
        this.props.userSignupRequest(this.state);
    }

    render() {
        return (
            <form className={style.signinform}  onSubmit={ this.onSubmit }>
                <h1 className="h3 mb-4 font-weight-normal text-center">账号注册</h1>

                <label htmlFor="inputName" className="sr-only">用户名</label>
                <input type="text" id="inputName" name="username" required={true} className={style.uname}
                placeholder="用户名" value={this.state.username} onChange={ this.onChange } ></input>

                <label htmlFor="inputEmail" className="sr-only">邮箱地址</label>
                <input type="email" id="inputEmail" name="email" required={true}
                className={style.email} placeholder="邮箱地址" value={ this.state.email } onChange={ this.onChange } ></input>

                <label htmlFor="signUpPassword" className="sr-only">密码</label>
                <input type="password" className={style.email} name="password" id="signUpPassword" 
                placeholder="密码" required={true} value={ this.state.password } onChange={ this.onChange }></input>

                <label htmlFor="confirmPassword" className="sr-only">确认密码</label>
                <input type="password" className={style.pwd} name="passwordConfirmation" id="confirmPassword"
                placeholder="确认密码" required={true} value={ this.state.passwordConfirmation } onChange={ this.onChange }></input>

                <div className={style.signbtn}>
                    <button className="btn btn-md btn-dark" type="submit">注册</button>
                </div>
            </form>
        )
    }
}
