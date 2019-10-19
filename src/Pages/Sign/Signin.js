import React, { Component } from 'react'
import {SignInForm} from 'Components'

export default class Signin extends Component {
    render() {
        return (
            <div className="row sign-in-body">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignInForm />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
