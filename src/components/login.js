import React, {Component} from 'react';
import './login.css'

class Login extends Component {
     constructor(props){
         super(props)
         let loggedIn = false;
         this.state ={
             username: '',
             password: '',
             loggedIn
         }
     }

     handleChange =(e)=>{
      this.setState({[e.target.name]: e.target.value})
     }

     handelSubmit = () =>{
        const {username, password} = this.state;
        if(username=='a' && password=='b'){
            sessionStorage.setItem("data", 'abc')
            this.props.history.push('/home')
        }
    }

    render() { 
        console.log(this.props)
        return ( <div>
         <h3>Login</h3>
        
         <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange} />
         <br />
         <input type='text' placeholder='password' name='password' value={this.state.password} onChange={this.handleChange} />
         <br/>
     <button onClick={this.handelSubmit}>Click me</button>
        </div>);
    }
}
 
export default Login;

// export default Login = (props)=> {
//     console.log('props', this.props)
//     return(
//         <div>login 2334</div>
//     )
// }