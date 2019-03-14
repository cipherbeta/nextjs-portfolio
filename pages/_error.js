import React, { Component } from 'react';
import Link from 'next/link';

class ErrorPage extends Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render(){
        return(
            <div className="videobg">
                <div className="videobg--overlay">
                    <h1>Aw, you've found a page that doesn't exist.</h1>
                    <h2>This makes puggo so sad. :(</h2>
                </div>
            
            </div>
        );
    }
}

export default ErrorPage;