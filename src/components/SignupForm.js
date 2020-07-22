import React,{ Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import firebase from 'firebase';
//import { StyleSheet, Text, View, TextInput, Alert, ActivityIndicator } from 'react';


export default class SignupForm extends Component {
  
    constructor(props) {
      super();
      this.state = { 
        firstName: '',
        lastName: '',
        password: '',
        email: '', 
        isLoading: false
      }
    }
  
    updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    registerUser = () => {
        console.log('Function called')

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
            password: ''
          })
          this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({ errorMessage: error.message }))      
      }
    }
  
    render() {
      if(this.state.isLoading){
        /*return(
          <View>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )*/
      }    
      return(
        <div>
            <Form onSubmit={this.registerUser()}>
               <Form.Group controlId="formBasicLastName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="First name" value = {this.props.firstName} />
                </Form.Group>
                
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control placeholder="Last name" value = {this.props.lastName} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value = {this.props.email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value = {this.props.password} />
                </Form.Group>

                <Button variant="primary" type="submit">
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