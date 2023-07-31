import React, { Component } from 'react';
import './Contact.css';
 
class Contact extends Component {
    render() {
        return (
            <div className="card">
                <div className="container">
                    <div className="Titel">
                        Contact
                    </div>
                    <div className="conten">
                        <b>Developer :</b> Shidiq Hernandi Andrian <br />
                        <b>Webiste   :</b> https://www.facebook.com/shidiqhernandi.andrian/ <br />
                        <b>Email     :</b> shidiq.hernandi@gmail.com <br />
                        <b>Telepon   :</b> 089669516879
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;