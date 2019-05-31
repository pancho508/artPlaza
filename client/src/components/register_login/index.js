import React from 'react';
import Rbutton from '../utils/button';
import Login from './login'

const RegisterLogin = () => {
    return (
        <div className="page_Wrapper">
            <div className="container"> 
                <div className="register_login_container">
                    <div className="left">
                        <h1>New to the site!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum tellus in libero auctor ornare. Ut eleifend sit amet nulla id pretium. Maecenas tempor tellus vel nisl dictum porttitor. Nam congue nulla a eros tristique posuere. Fusce sit amet sem gravida, maximus risus in, hendrerit sem. Nunc a fermentum lacus. In hac habitasse platea dictumst. Suspendisse eleifend nec felis nec tempor. Cras efficitur blandit lectus, sed facilisis dolor accumsan ut. Pellentesque posuere feugiat enim et pulvinar. Mauris vestibulum ac ligula sit amet rhoncus. Nam quis ipsum iaculis massa egestas egestas sed nec nibh. Curabitur dictum odio vitae odio ultricies blandit. Cras et lorem volutpat, elementum nibh nec, efficitur lorem. Proin consequat pretium arcu.</p>
                        <Rbutton
                            type="default"
                            title="Create your account"
                            linkTo="/register"
                            addStyles={{
                                margin:'10px 0 0 0'
                            }}
                        />
                    </div>
                        <div className="right"> 
                            <h2>Register customers</h2>
                            <p>If you have an account please log in...</p>
                            <Login/>    
                        </div>
                    </div>  
                <div>
                </div>  
            </div>
        </div>
    );
};

export default RegisterLogin;