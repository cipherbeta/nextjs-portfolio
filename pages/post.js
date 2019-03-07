import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';
import BlogItem from '../components/blog/blogItem';
import {withRouter} from 'next/router';

const Projects = withRouter(props => { 
    
    return(
        <>  
            <div className="bloglist">
            <h1>{props.router.query.id}</h1>
            <p>
            this is the posts page
            </p>
            
            </div>
            
        </>
    )
});

Projects.getInitialProps = async ({ req, props }) => {
    console.log(props);
    // const res = await client.getEntries({
    //     'content_type': 'portfolioItem'
    // }).then(entries => {
    //     console.log(entries);
    //     return entries.items;
    // });
    // console.log(res);
    // return { projects: res };
}

export default Projects;