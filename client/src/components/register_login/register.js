import React, { Component } from 'react';
import FormField from '../utils/forms/formfield';
import { update, generateData, isFormValid } from '../utils/forms/formactions';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';

class Register extends Component {

    state={
        formError: false, 
        formSuccess: '',
        formdata:{
            name:{
                element: 'imput',
                value: '',
                config:{
                    name: 'name_imput',
                    type: 'text',
                    palceholder: 'Enter your name'
                },
                validation:{
                    required: true
                },
                valid: false, 
                touched: false, 
                validationMessage: ''
            },
            lastname:{
                element: 'imput',
                value: '',
                config:{
                    lastname: 'lastname',
                    type: 'text',
                    palceholder: 'Enter your lastname'
                },
                validation:{
                    required: true
                },
                valid: false, 
                touched: false, 
                validationMessage: ''
            },
            email:{
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    palceholder: 'Enter your Email'
                },
                validation: {
                    required: true, 
                    email: true
                },
                valid: false, 
                touched: false, 
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    palceholder: 'Enter your password'
                },
                validation:{
                    required: true
                }, 
                valid: false, 
                touched: false, 
                validationMessage: ''
            },
            confirmPassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'confirm_password_input',
                    type: 'password',
                    palceholder: 'Confirm your password'
                },
                validation:{
                    required: true,
                    confirm: 'password'
                }, 
                valid: false, 
                touched: false, 
                validationMessage: ''
            }
        }
    }
    

    submitForm = () =>{

    }

    render() {
        return (
            <div className='page_wrapper'>
                <div  className='container'>
                    <div  className='register_login_container'>
                        <div  className='left'>
                            <form onSubmit={(event)=> this.submitForm(event)}>
                                <h2>Personal Information</h2>
                                <div classname="form_block_two">
                                    <div className="block">
                                        <FormField 
                                            id={'name'}
                                            formdata={this.state.formdata.name}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                    <div className="block">
                                        <FormField 
                                            id={'lastname'}
                                            formdata={this.state.formdata.lastname}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField
                                        id={'email'}
                                        formdata={this.state.formdata.email}
                                    />    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Register);