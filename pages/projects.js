import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';
import BlogItem from '../components/blog/blogItem';

const Projects = props => { 
    return(
        <>  
            <div className="bloglist">
            {props.projects.map((item, i) => {
                return(<BlogItem data={item.fields} title={item.fields.title} key={i}/>)
            })}
            </div>
            
        </>
    )
}

Projects.getInitialProps = async ({ req }) => {
    const res = await client.getEntries({
        'content_type': 'portfolioItem'
    }).then(entries => {
        console.log(entries);
        return entries.items;
    });
    console.log(res);
    return { projects: res };
}

export default Projects;