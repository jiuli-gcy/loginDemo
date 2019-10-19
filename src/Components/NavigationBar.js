import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
                    <div className="container d-flex justify-content-between align-items-center">
                        <Link className="navbar-brand" to="/">Test</Link>
                    </div>
                    <div className="collapse navbar-collapse align-items-center" style={{float:'right'}}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Link</Link>
                            </li>
                            <li>
                                <Link class="btn btn-sm btn-outline-secondary" to="/signup">Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                <nav className="navbar justify-content-between navbar-expand align-items-center navbar-dark bg-dark mb-3">
                    <div className="col-4 text-center">
                        <Link className="blog-header-logo" to="/"
                        style={{fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',fontSize: '2rem'}}>
                            Test
                        </Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Link className="nav-link" to="/login">登录</Link>
                        <Link className="btn btn-md btn-outline-secondary" to="/signup">注册</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
