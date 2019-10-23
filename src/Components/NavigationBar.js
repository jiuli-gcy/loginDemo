import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar justify-content-between navbar-expand align-items-center navbar-dark bg-dark mb-3">
                    <div className="col-4 text-center">
                        <Link className="blog-header-logo" to="/"
                        style={{fontFamily: '"Playfair Display"', color:'#fff', textDecoration:'none' , fontSize: '2rem'}}>
                            Test
                        </Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Link className="nav-link" style={{color:'#fff'}} to="/login">登录</Link>
                        <Link className="btn btn-md btn-outline-secondary" style={{color:'#fff'}} to="/signup">注册</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
