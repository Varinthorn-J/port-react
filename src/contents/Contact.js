import React, { Component } from 'react'

import Social from '../components/Social'

class Contact extends Component {
    render() {
        return (
          <div className="condiv">
            <h1 className="subtopic">Contact Me</h1>
            <h3>Email : jaitrong3016@gmail.com</h3>
            <h3>Facebook : Warinthon Jaitrong</h3>
            <h3>Line : WPJ_30</h3>
            <h3>Instagram : @WPJ_30</h3>
            <h3>Tel : 0909010166</h3>
            <Social />
          </div>
        );
    }
}

export default Contact;
