import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import SignUpForm from './SignUpForm'
import { userSignupRequest } from 'Redux/actions/signupAction'
//import { addFlashMessage } from 'Redux/actions/flashMessages'

import { Link } from 'react-router-dom'
import style from './style.module.scss'

class SignUp extends Component {
    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired,
        // addFlashMessage: PropTypes.func.isRequired
    }
    render() {
        const { userSignupRequest } = this.props;
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignUpForm 
                    userSignupRequest={ userSignupRequest } />
                    <p className={style.signmessage}>已有账号，<Link className={style.herf} to="/login">点击登录</Link></p>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default connect(null, { userSignupRequest})(SignUp)