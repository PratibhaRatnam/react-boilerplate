import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/login'

const App = props =>{
return(
    <BrowserRouter>
    <Switch>
        <Route path='/' component={Login}/>
       
    </Switch>
    </BrowserRouter>

)
}

export default App;

