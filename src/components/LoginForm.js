import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import firebase from './firebase'

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = { 
          email: '', 
          password: '',
          isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);

      }
    
    handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    }

    userLogin = () => {
        if(this.state.email === '' && this.state.password === '') {
         // Alert.alert('Enter details to signin!')
        } else {
          this.setState({
            isLoading: true,
          })
          firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
            this.setState({
              isLoading: false,
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Dashboard')

          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
      }

      render() {
        if(this.state.isLoading){
         /* return(
            <View style={styles.preloader}>
              <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
          )*/
        }    
        return (
         
            <div styles={{ backgroundImage:`url(../img/welcome.jpg)` }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" placeholder="Enter email" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="Password" placeholder="Password"  onChange={this.handleChange} />
                </Form.Group>

                <div>
                    <Button variant="primary" onClick={this.userLogin}>
                        Login
                    </Button>{' '}

                    <Button variant="secondary" href="/signup">
                        Sign-up
                    </Button>
                </div>
        </div>

        );
      }

} 
/*
const LoginForm = () => {
    return(
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>{' '}

                    <Button variant="secondary" href="/signup">
                        Sign-up
                    </Button>
                </div>
            </Form>
        </div>
    )
}

*/