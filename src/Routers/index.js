import React, { Component } from 'react';

import { Route } from 'react-router-dom'
import App from 'Pages/App';
import Signin from 'Components/Signin/Signin'
import Signup from 'Components/Signup/Signup'

export default (
    <div role="main" className="container">
        <Route exact path="/" component={ App }></Route>
        <Route path="/login" component={ Signin }></Route>
        <Route path="/signup" component={ Signup }></Route>
    </div>
)