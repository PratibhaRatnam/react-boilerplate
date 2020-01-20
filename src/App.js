import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'

const App = props =>{
return(
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/home' component={Home}/>
       
    </Switch>
    </BrowserRouter>

)
}

export default App;

