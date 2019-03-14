import React, { Component } from 'react';
import Sandwich from './Sandwich';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OffCanvasMenu from './OffCanvasMenu';
import Link from 'next/link';

class Header extends Component {
    state = {
        offCanvasMenuOpen: false
    }

    handleMenuToggle = () => {
        this.setState({offCanvasMenuOpen: !this.state.offCanvasMenuOpen});
    }

    // Runs a check to see if a user's click is outside of the menu boundaries while
    // the menu is open. If so, closes menu for a more fluid experience.
    handleClickListener = () => {
        console.log("checking for click");
        
    }

    render(){
        return(
            <>
            <nav className="topbar">
                <span className="links">
                <Link prefetch href="/"><a>Home</a></Link>
                <Link prefetch href="/about"><a>About</a></Link>
                <Link prefetch href="/blog"><a>Blog</a></Link>
                <Link prefetch href="/projects"><a>Projects</a></Link>
                </span>
                <span className="wtexture">
                    drop.me.a.message ^-^ >>>
                </span>
                <div className="social">
                    <a href="https://twitter.com/TheMyopicNinja" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'twitter']}/>
                    </a>
                    <a href="https://www.linkedin.com/in/isaac-doud-33b803105/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                    </a>
                    <a href="https://codepen.io/cipherbeta/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'codepen']}/>
                    </a>
                    <a href="https://github.com/cipherbeta" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']}/>
                    </a>
                    <a href="https://gitlab.com/WaifuCannon" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'gitlab']}/>
                    </a>
                </div>
                <span className="links">
                <Link prefetch href="/contact"><a className="right">Contact</a></Link>
                </span>
                <Sandwich toggle={this.handleMenuToggle} active={this.state.offCanvasMenuOpen}/>
            </nav>
            <div className="header">
                <div className="header--top">
                    <Link href="/">
                        <div className="logo">
                            <h1>I<span className="accent">/</span>D</h1>
                        </div>
                    </Link>
                    
                    <span className="header--wtexture">
                        isaac_doud.front.end.webdev
                    </span>
                </div>
                
                <div className="header--bottom">
                    <a href="https://twitter.com/TheMyopicNinja" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'twitter']}/>
                    </a>
                    <a href="https://www.linkedin.com/in/isaac-doud-33b803105/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                    </a>
                    <a href="https://codepen.io/cipherbeta/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'codepen']}/>
                    </a>
                    <a href="https://github.com/cipherbeta" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']}/>
                    </a>
                    <a href="https://gitlab.com/WaifuCannon" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'gitlab']}/>
                    </a>
                </div>
            </div>
            <OffCanvasMenu active={this.state.offCanvasMenuOpen}/>
            </>
        );
    }
}

export default Header;