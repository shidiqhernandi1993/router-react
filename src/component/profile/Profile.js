import React, { Component } from 'react';
import './Profile.css';
 
class Profile extends Component {
    render() {
        return (
            <div className="card">
                <div className="container">
                    <div className="Titel">
                        Profile
                    </div>
                    <div className="conten">
                        <b>https://www.facebook.com/shidiqhernandi.andrian/</b> <br />
Nama Saya Shidiq Hernandi Andrian,Saya berasal dari lulusan Statistika FMIPA IPB 2017
                   </div>
                </div>
            </div>
        );
    }
}
 
export default Profile;