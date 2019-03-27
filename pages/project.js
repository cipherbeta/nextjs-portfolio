import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';
import BlogItem from '../components/blog/blogItem';
import {withRouter} from 'next/router';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Project = props => { 
    console.log(props);
    const featImage = props.article[0].fields.featuredImage.fields.file.url;
    return(
        <>  
            <div className="bloglist">
            <div className="blogpost_header" style={{backgroundImage: `linear-gradient(rgba(14,14,14,1), rgba(14,14,14,.5), rgba(14,14,14,1)), url(${featImage})`}}>
            <h1>{props.article[0].fields.title}</h1>
            <h6>{dayjs(props.article[0].fields.published).fromNow().toUpperCase()}</h6>
            </div>
            
            <div className="blogpost_wrapper">
            {props.article 
            ? <ReactMarkdown source={props.article[0].fields.content} escapeHtml={false}/>
            : <div/>}
            </div>
            </div>
            projectspage
        </>
    )
};

Project.getInitialProps = async (context) => {
    // console.log(context);
    const id = context.query.title;
    console.log(id);
    const res = await client.getEntries({
        'content_type': 'portfolioItem', 'fields.slug': id, limit: 1
    }).then(entries => {
    //     console.log(entries);
        return entries.items;
    });
    return { article: res };
}

export default withRouter(Project);