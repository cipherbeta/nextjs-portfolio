import React from 'react';

const BlogItem = props => {
    return(
    <div className="blogItem">
        <div className="blogItem--image" style={{backgroundImage: `url(https:${props.data.featuredImage.fields.file.url})`}}>
        </div>
        <div className="blogItem--title">
            {props.title}
        </div>
    </div>
)
}

export default BlogItem;