import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';
import BlogItem from '../components/blog/blogItem';

const Blog = props => {
    return(
        <>  
            <div className="bloglist">
            {props.posts.map((item, i) => {
                return(<BlogItem data={item.fields} title={item.fields.title} key={i}/>)
            })}
            </div>
            
        </>
    )
}

Blog.getInitialProps = async ({ req }) => {
    const res = await client.getEntries({
        'content_type': 'blogPost'
    }).then(entries => {
        console.log(entries);
        return entries.items;
    });
    console.log(res);
    return { posts: res };
}

export default Blog