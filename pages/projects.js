import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';

class Projects extends React.Component { 
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
                projects page
            </>
        )
    }
}

export default Projects