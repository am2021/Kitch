import React,{ Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import firebase from './firebase';
import { Redirect } from 'react-router-dom';

//import { StyleSheet, Text, View, TextInput, Alert, ActivityIndicator } from 'react';
import login from '../pages/Login'
export default class SignupForm extends Component {
  
    constructor() {
      super();
      this.state = { 
        firstName: '',
        lastName: '',
        password: '',
        email: '', 
        isLoading: false,
        redirect: false
      }
      this.handleChange = this.handleChange.bind(this);

     // this.registerUser = this.registerUser.bind(this);
    }
  /*
    updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }*/
    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }
    
  
    registerUser = () => {
        console.log('Function called')
        console.log(this.props.email)
        console.log(this.state.email)

      if(this.state.email === '' && this.state.password === '') {
       // Alert.alert('Enter details to signup!')
      } else {
        this.setState({
          isLoading: true,
        })
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            firstName: this.state.firstName,
            lastName: this.state.lastName

          })
          console.log('User registered successfully!')
          this.setState({
            isLoading: false,
            firstName: '',
            lastName: '',
            email: '', 
            password: '',
            redirect: true
          })
          window.Location = '../pages/Login'
          this.props.history.push('/login')
          //this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({ errorMessage: error.message }))      
      }
    }
  
    render() {
      if(this.state.redirect){
        return <Redirect to='/'/>;
      }
      if(this.state.isLoading){
        /*return(
          <View>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )*/
      }    
      return(
        <div>

            <Form>
               <Form.Group controlId="formBasicLastName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="First name" name="firstName" onChange={this.handleChange} />
                </Form.Group>
                
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control placeholder="Last name" name="lastName" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"  onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                </Form.Group>

                <Button variant="primary" onClick={this.registerUser}>
                    Sign-up
                </Button>
            </Form>
        </div>
    )
    }
  }
  






/*

const SignupForm = () => {
    return(
        <div>
            <Form>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="First name" />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control placeholder="Last name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign-up
                </Button>
            </Form>
        </div>
    )
}

export default SignupForm
*/