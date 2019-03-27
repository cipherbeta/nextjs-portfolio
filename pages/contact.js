import React, { Component } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = props => {

    return(
        <>
            <div className="contactPage--header" style={{backgroundImage: 'linear-gradient(rgba(14,14,14,1), rgba(14,14,14,.75), rgba(14,14,14,1)), url(/static/images/contact.webp)'}}>
            <h1>Contact Me</h1>
            <p>Want to work together? Toss me a line - looking forward to hearing from ya!</p>
            <a href="mailto:isaacdoud@protonmail.com"><button><FontAwesomeIcon icon="envelope"/> isaacdoud@protonmail.com</button></a>
            <a href="tel:+19207640322"><button><FontAwesomeIcon icon="phone"/> 1.920.764.0322</button></a>
            <a href="https://twitter.com/TheMyopicNinja" target="_blank"><button><FontAwesomeIcon icon={['fab', 'twitter']}/> @TheMyopicNinja</button></a>
            </div>
        </>
    )
}

export default Contact