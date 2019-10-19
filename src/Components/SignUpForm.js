import React, { Component } from 'react'
import style from './style.module.scss'

export default class SignupForm extends Component {
    render() {
        return (
            <form className={style.signinform} >
                <h1 className="h3 mb-3 font-weight-normal text-center">账号注册</h1>

                <label for="inputEmail" className="sr-only">用户名</label>
                <input type="text" id="inputName" required="true" 
                className="form-control" placeholder="用户名"  ></input>

                <label for="inputEmail" className="sr-only">邮箱地址</label>
                <input type="email" id="inputEmail" required="true" 
                className="form-control" placeholder="邮箱地址"  ></input>

                <label for="inputPassword" className="sr-only">密码</label>
                <input type="password" className="form-control" 
                id="inputPassword" placeholder="密码" required="true"></input>

                <div className={style.signbtn}>
                    <button className="btn btn-md btn-dark" type="submit">注册</button>
                </div>
            </form>
        )
    }
}
