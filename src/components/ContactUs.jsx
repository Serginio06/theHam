import React, {Component} from 'react';
import basePath from './../config/config';
import ContactUsMap from './ContactUsMap.jsx'
var initialCenter = { lng: 30.521135, lat: 50.441819 };



class ContactUs extends Component {

    leaveMsg() {
        
        console.log('this.msgName=', this.msgName && this.msgEmail);
        
        if ( this.msgName.value && this.msgEmail.value && this.msgMsg.value) {
            alert('Thank you for your message. We will contact you soon');
        } else {
            alert('Please, fill in all fields to leave us a message');
        }
        // console.log ('leaveMsg');
    }


    render() {
        return (
            <div className="contact-us" id="contacts">
                <div className="contact--leave-msg--form">
                    <h2 className="black-text">Keep In Touch
                        <img src={basePath+"images/stripes.png"} alt="" className="strips--img"/>
                    </h2>
                    <div className="contact-map" id="map">

                        <ContactUsMap initialCenter={initialCenter} />

                    </div>
                    <form className="contact--form">
                        <input className="contact-input-title" type="text" placeholder="Name"
                               ref={(input) => this.msgName = input}
                        />
                        <input className="contact-input-title" type="email" placeholder="Email"
                               ref={(input) => this.msgEmail = input}
                               />
                        <textarea className="contact-input-msg" type="text" placeholder="Message"
                                  ref={(input) => this.msgMsg = input}
                        />
                        <button type="submit" className="green-btn uppercase" onClick={this.leaveMsg.bind (this)}
                        >
                            Send request
                        </button>
                    </form>

                </div>
            </div>
        )
    }
}

export default ContactUs;