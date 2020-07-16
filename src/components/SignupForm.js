import React from 'react';
import { Form, Button } from 'react-bootstrap';

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