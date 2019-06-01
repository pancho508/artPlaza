import React, { Component } from 'react';
import FormField from '../utils/forms/formfield';
import {update, generateData, ifFormValid } from '../utils/forms/formactions';
//allows for props to be injected into this component
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser} from '../../actions/user_actions'

class Login extends Component {

    state = {
        formError: false,
        formSuccess:'',
        formdata:{
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            password: {
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }
    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'login');
        this.setState({
            formError: false, 
            formdata: newFormdata 
        })

    }

    submitForm = (event) =>{
        event.preventDefault();
        let dataToSubmit =  generateData(this.state.formdata, 'login');
        let formIsValid = ifFormValid( this.state.formdata, 'login' );

        if(formIsValid){
            // console.log(dataToSubmit)
            // we want to dispatch the action from redux
            this.props.dispatch(loginUser(dataToSubmit)).then(response => {
                if(response.payload.loginSuccess){
                    console.log(response.payload);
                    this.props.history.push('/user/dashboard ')
                }else{
                    this.setState({
                        formError: true
                    })
                }
            });

        }else{
            this.setState({
                formError: true
            })
            console.log( this.state)
        }
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
                    <FormField
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element)=> this.updateForm(element)}
                    />

                    { this.state.formError ? 
                        <div className="error_label">
                            <br />
                            Please check your data
                        </div>
                        :null}
                    <button onClick = {(event)=> this.submitForm(event)}>
                        Login    
                    </button>  
                </form>
            </div>
        );
    }
}

export default connect()(withRouter(Login));