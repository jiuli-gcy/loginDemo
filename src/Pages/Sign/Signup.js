import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSignupRequest } from 'Redux/actions/signupAction'

import { SignUpForm } from 'Components'
import { Link } from 'react-router-dom'
import style from './style.module.scss'
import PropTypes from 'prop-types';

//import style from './style.scss'

class SignUp extends Component {
    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignUpForm userSignupRequest={ this.props.userSignupRequest } />
                    <p className={style.signmessage}>已有账号，<Link className={style.herf} to="/login">点击登录</Link></p>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default connect(null, { userSignupRequest})(SignUp)