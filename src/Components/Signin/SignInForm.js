import React, { Component } from 'react'
import style from './style.module.scss'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validateInput from 'Utils/validations/login'
import { login } from 'Redux/actions/login'

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          identifier: '',
          password: '',
          errors: {},
          isLoading: false
        }
    }


    static propTypes = {
        login: PropTypes.func.isRequired
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    isValid = () => {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => this.context.router.history.push('/'),
                (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
            );
        }
    }

    render() {
        const { errors, identifier, password, isLoading } = this.state;
        return (
            <form className={style.signinform} onSubmit={ this.onSubmit }>
                <h1 className="h3 mb-4 font-weight-normal text-center" >账号登录</h1>

                { errors.form && <div className="alert alert-danger">{ errors.form }</div> }

                <label htmlFor="signInName" className="sr-only">用户名/邮箱</label>
                <input type="text" value={ identifier } onChange={ this.onChange }
                 id="signInName" name="identifier"
                className={classnames(style.uname,'form-control',{'is-invalid':errors.identifier})}
                 placeholder="用户名/邮箱"  ></input>
                { errors.identifier && <span className='form-text text-muted'>{ errors.identifier }</span> }
                
                <label htmlFor="signInPassword" className="sr-only">密码</label>
                <input type="password" value={ password } name="password"
                onChange={ this.onChange } id="signInPassword" placeholder="密码"
                className={ classnames(style.pwd,'form-control',{'is-invalid':errors.password})}></input>
                { errors.password && <span className='form-text text-muted'>{ errors.password }</span> }

                <div className={style.signbtn}>
                    <button disabled={ isLoading } className="btn btn-md btn-primary btn-dark" 
                    type="submit">登录</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { login })(SignupForm);