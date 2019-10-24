import React, { Component } from 'react'
import style from './style.module.scss'

export default class SignupForm extends Component {
    render() {
        return (
            <form className={style.signinform} >
                <h1 className="h3 mb-4 font-weight-normal text-center" >账号登录</h1>

                <label htmlFor="signInName" className="sr-only">用户名</label>
                <input type="text" id="signInName" required={true}
                className={style.uname} placeholder="用户名"  ></input>
                
                <label htmlFor="signInPassword" className="sr-only">密码</label>
                <input type="password" className={style.pwd}
                id="signInPassword" placeholder="密码" required={true}></input>

                <div className={style.signbtn}>
                    <button className="btn btn-md btn-primary btn-dark" type="submit">登录</button>
                </div>
            </form>
        )
    }
}
