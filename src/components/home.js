import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        console.log(sessionStorage.getItem('data'))
    return ( <div>Your in home{sessionStorage.getItem('data')}</div> );
    }
}
 
export default Home;