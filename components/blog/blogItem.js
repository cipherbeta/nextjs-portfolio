import React from 'react';
import Link from 'next/link';

const BlogItem = props => {
    const url = props.data.title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
    return(
        // <Link prefetch href={`/post/${url}`} as={`/p/${props.sys.id}`}>
        <Link prefetch href={`/p/${props.sys.id}`}>
            <div className="blogItem">
                <div className="blogItem--image" 
                style={{backgroundImage: `url(https:${props.data.featuredImage.fields.file.url})`}}>
            </div>
            <div className="blogItem--title">
                {props.title}
            </div>
        </div>
        </Link>
    
)
}

export default BlogItem;