import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';
import BlogItem from '../components/blog/blogItem';
import {withRouter} from 'next/router';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';

const Post = withRouter(props => { 
    console.log(props);
    const featImage = props.article[0].fields.featuredImage.fields.file.url;
    return(
        <>  
            <div className="bloglist">
            <div className="blogpost_header" style={{backgroundImage: `linear-gradient(rgba(14,14,14,1), transparent, rgba(14,14,14,1)), url(${featImage})`}}>
            <h1>{props.article[0].fields.title}</h1>
            <h6>{props.article[0].sys.id}</h6>
            </div>
            
            <div className="blogpost_wrapper">
            {props.article 
            ? <ReactMarkdown source={props.article[0].fields.content} escapeHtml={false}/>
            : <div/>}
            </div>
            </div>
            
        </>
    )
});

Post.getInitialProps = async (context) => {
    console.log(context);
    const id = context.query.id;
    const res = await client.getEntries({
        'content_type': 'blogPost', 'sys.id': context.query.id, limit: 1
    }).then(entries => {
        console.log(entries);
        return entries.items;
    });
    console.log(res);
    return { article: res };
}

export default Post;