import React, { Component } from 'react'
import SignInForm from './SignInForm'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

export default class Signin extends Component {
    render() {
        return (
            <div className="row sign-in-body">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignInForm />
                    <p className={style.signmessage}>没有账号？<Link className={style.herf} to="/signup">点我注册</Link></p>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
