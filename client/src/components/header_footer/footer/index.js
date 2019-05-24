import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    ArtValedor
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Conctact information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon icon={faCompass} className="icon" />
                                <div className="nfo">
                                    <div>Adress</div>
                                    <div>1337 Reforma</div>
                                         
                                </div>    
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon icon={faPhone} className="icon" />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>00 11 22 33 44 55 66 77</div>
                                         
                                </div>    
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon icon={faClock} className="icon" />
                                <div className="nfo">
                                    <div>Working Hours</div>
                                    <div>Mon-Fri/ 9am - 9pm</div>
                                         
                                </div>    
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>info@art.com</div>
                                         
                                </div>    
                            </div>
                        </div>    
                    </div>
                    <div className="left">
                        <h1>
                        Síguenos
                        </h1>
                        <div>
                            <div>
                                Suscríbete al newsletter 
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </footer>
    );
};

export default Footer;