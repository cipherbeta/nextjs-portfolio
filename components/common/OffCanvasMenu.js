import React from 'react';
import Link from 'next/link';

const OffCanvasMenu = props => (
    <aside className={"offcanvasmenu" + (props.active ? " active" : "")}>
        <div>
            <h1 style={{margin: 0, padding: 0}}>Isa Doud</h1>
            <small style={{marginBottom: '2em'}}>Front End Developer // Creative</small>
        </div>
        
        <div>
            <Link prefetch href="/"><a>Home</a></Link>
            <Link prefetch href="/blog"><a>Blog</a></Link>
            <Link prefetch href="/projects"><a>Projects</a></Link>
            <Link prefetch href="/contact"><a>Contact</a></Link>
        </div>
    </aside>
)

export default OffCanvasMenu;