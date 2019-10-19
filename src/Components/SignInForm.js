import React, { Component } from 'react'

export default class SignupForm extends Component {
    render() {
        return (
            <form className="form-signin" >
                <h1 className="h3 mb-3 font-weight-normal">账号登录</h1>
                <label for="inputEmail" className="sr-only">用户名</label>
                <input type="text" id="inputEmail" required="" autofocus=""
                className="form-control" placeholder="Email address"  ></input>
                <label for="inputEmail" className="sr-only">邮箱地址</label>
                <input type="email" id="inputEmail" required="" autofocus=""
                className="form-control" placeholder="Email address"  ></input>
                <label for="inputPassword" className="sr-only">密码</label>
                <input type="password" className="form-control" 
                id="inputPassword" placeholder="Password" required=""></input>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        )
    }
}
