import React, { Component } from 'react'
import {Button,Form } from 'react-bootstrap';

export class Register extends Component {
    render() {
        return (
            <div className="ui text container md-2">
                <h1>Create new Account</h1>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Full Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enregister
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Register
