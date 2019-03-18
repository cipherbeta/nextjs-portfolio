import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';
import BlogItem from '../components/blog/blogItem';
import Head from 'next/head';

const Blog = props => {
    return(
        <>  
            <Head>
                <title>Isaac Doud - Blog</title>
            </Head>
            <div className="bloglist">
            {props.posts.map((item, i) => {
                return(<BlogItem data={item.fields} sys={item.sys} title={item.fields.title} key={i}/>)
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