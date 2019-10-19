import React, { Component } from 'react';

import { Route } from 'react-router-dom'
import App from 'Pages/App';
import Signin from 'Pages/Sign/Signin'
import Signup from 'Pages/Sign/Signup'

export default (
    <main role="main" className="container">
        <Route exact path="/" component={ App }></Route>
        <Route path="/login" component={ Signin }></Route>
        <Route path="/signup" component={ Signup }></Route>
    </main>
)