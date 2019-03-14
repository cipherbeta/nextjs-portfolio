import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';
import BlogItem from '../components/blog/blogItem';
import {withRouter} from 'next/router';

const Post = withRouter(props => { 
    
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

Post.getInitialProps = async (context) => {
    console.log(context);
    const id = context.query.id;
    const res = await client.getEntries({
        'content_type': 'blogPost', 'id': 'id'
    }).then(entries => {
        console.log(entries);
        return entries.items;
    });
    console.log(res);
    return { projects: res };
}

export default Post;