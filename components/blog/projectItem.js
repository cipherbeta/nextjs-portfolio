import React from 'react';
import Link from 'next/link';

const ProjectItem = props => {
    const url = props.data.title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
    console.log(props);
    return(
        // <Link prefetch href={`/post/${url}`} as={`/p/${props.sys.id}`}>
        <Link prefetch href={`/project?title=${props.data.slug}`}>
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

export default ProjectItem;