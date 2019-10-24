import React, { Component } from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';
//import { withRouter } from 'react-router-dom';
//import axios from 'axios';

class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors:{},
            isLoading: false
        }
    }

    static contextTypes = {
        router: PropTypes.object
    }

    static propTypes = {
        userSignupRequest:PropTypes.func.isRequired
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoading:true})
        console.log(this.state);
        //axios.post('api/users',{user:this.state})
        this.props.userSignupRequest(this.state).then(
            ()=>{
                console.dir(this.context);
                //this.props.history.push('/');
            },
            ({ response }) => { this.setState({ errors: response.data,isLoading:true})}
        );
    }

    render() {
        const { errors } = this.state;
        return (
            <form className={style.signinform}  onSubmit={ this.onSubmit }>
                <h1 className="h3 mb-4 font-weight-normal text-center">账号注册</h1>

                <label htmlFor="inputName" className="sr-only">用户名</label>
                <input type="text" id="inputName" name="username"
                className={classnames(style.uname,'form-control',{'is-invalid':errors.username})}
                placeholder="用户名" value={this.state.username} onChange={ this.onChange } ></input>
          { errors.username && <span className='form-text text-muted'>{ errors.username }</span> }

                <label htmlFor="inputEmail" className="sr-only">邮箱地址</label>
                <input type="email" id="inputEmail" name="email"
                className={ classnames(style.email,'form-control',{'is-invalid':errors.email})} 
                placeholder="邮箱地址" value={ this.state.email } onChange={ this.onChange } ></input>
          { errors.email && <span className='form-text text-muted'>{ errors.email }</span> }

                <label htmlFor="signUpPassword" className="sr-only">密码</label>
                <input type="password" className={ classnames(style.email,'form-control',{'is-invalid':errors.password})} name="password" id="signUpPassword" 
                placeholder="密码" value={ this.state.password } onChange={ this.onChange }></input>
          { errors.password && <span className='form-text text-muted'>{ errors.password }</span> }

                <label htmlFor="confirmPassword" className="sr-only">确认密码</label>
                <input type="password" className={ classnames(style.pwd,'form-control',{'is-invalid':errors.passwordConfirmation})} name="passwordConfirmation" id="confirmPassword"
                placeholder="确认密码" value={ this.state.passwordConfirmation } onChange={ this.onChange }></input>
          { errors.passwordConfirmation && <span className='form-text text-muted'>{ errors.passwordConfirmation }</span> }

                <div className={style.signbtn}>
                    <button className="btn btn-md btn-dark" type="submit"
                    disabled={this.state.isLoading}>注册</button>
                </div>
            </form>
        )
    }
}
export default SignupForm;