import React, { Component } from 'react'
import { SignUpForm } from 'Components'

//import style from './style.scss'

export default class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignUpForm />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
