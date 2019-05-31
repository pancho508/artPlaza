import React, { Component } from 'react';
import FormField from '../utils/forms/formfield';

import { connect } from 'react-redux';

class Login extends Component {

    state = {
        formError: false, 
        formSuccess: '',
        formdata:{
            email:{
                elements: 'input',
                value: '',
                config:{
                    name: 'email_imput',
                    type: 'email',
                    palceholder: 'enter your email'
                },
                validation:{
                    required: true, 
                    email: true 
                },
                valid: false, 
                touched: false,
                validataionMessage: ''
            },
            password:{
                elements: 'input',
                value: '',
                config:{
                    name: 'password_imput',
                    type: 'password',
                    palceholder: 'enter your password'
                },
                validation:{
                    required: true 
                },
                valid: false, 
                touched: false,
                validataionMessage: ''
            },
        }
    }
    updateForm = () => {

    }

    submitForm = () =>{

    }

    render() {
        return (
            <div className="signin_wrapper">
                <form  onSubmit={(event) => this.submitForm(event)}>
                    <FormField
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element)=> this.updateForm(element)}
                    />
                </form>
            </div>
        );
    }
}

export default connect()(Login);