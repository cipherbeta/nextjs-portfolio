import React from 'react'; 
import Head from 'next/head';
import '../styles/main.scss';
import Header from './common/Header';
import RecentPostsSidebar from './common/RecentPosts';
import { PageTransition } from 'next-page-transitions';

// Font Awesome Imports
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTwitter, faLinkedin, faCodepen, faGithub, faGitlab} from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faLinkedin, faCodepen, faGithub, faGitlab);

const Layout = props => (
    <>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet" key="font-import"/>
        </Head>
        <Header/>
        <div className="content">
            {props.children}
            <h1>Footer</h1>
        </div>
        <RecentPostsSidebar/>
        
    </>
)

export default Layout;