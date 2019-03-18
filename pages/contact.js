import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';
import Head from 'next/head';

class Contact extends React.Component { 
    static async getInitialProps({req}){
        let data;
        return(
            client
                .getEntries()
                .then(entries => {
                    console.log(entries);
                    data = entries;
                    return data;
                })
            )
    }
    state = {

    }

    render(){
        return(
            <>
                <Head>
                    <title>Isaac Doud - Contact Me</title>
                </Head>
                Contact page
            </>
        )
    }
}

export default Contact