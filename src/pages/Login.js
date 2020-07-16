import React from 'react';
import { Form, Button } from 'react-bootstrap'

const Login = () => {
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

export default Login