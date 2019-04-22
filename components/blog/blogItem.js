import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const BlogItem = props => {
    console.log(props);
    return (
        // <Link prefetch href={`/post/${url}`} as={`/p/${props.sys.id}`}>
        <Link prefetch href={`/post?title=${props.data.slug}`} as={`/blog/${props.data.slug}`}>
            <div className="blogItem">
                <div
                    className="blogItem--image"
                    style={{
                        backgroundImage: `url(https:${props.data.featuredImage.fields.file.url})`
                    }}
                >
                    <div className="blogItem--meta">
                        published {dayjs(props.data.published).fromNow()}
                    </div>
                </div>
                <div className="blogItem--title">{props.title}</div>
            </div>
        </Link>
    );
};

export default BlogItem;
