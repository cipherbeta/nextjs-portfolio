import React from 'react'; 
import Head from 'next/head';
import '../styles/main.scss';
import Header from './common/Header';
import Footer from './common/Footer';

// Font Awesome Imports
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTwitter, faLinkedin, faCodepen, faGithub, faGitlab, 
    faHtml5, faCss3, faJs, faReact, faSoundcloud, faYoutube} from '@fortawesome/free-brands-svg-icons';


library.add(faTwitter, faLinkedin, faCodepen, faGithub, faGitlab, faHtml5, faCss3, faJs, faReact, faSoundcloud, faYoutube);

const Layout = props => (
    <>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet" key="font-import"/>
        </Head>
        <Header/>
        <div className="content">
            {props.children}
            <Footer/>
        </div>
        
    </>
)

export default Layout;