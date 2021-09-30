import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

export default class Home extends Component{
    responseGoogle = (response) => {
        console.log(response);
    }

    render(){
        return(
            <GoogleLogin 
                clientId="1024010743256-hnj5gk6dff7vno7triuookb5lofuiu56.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
    />
        )
    }
}