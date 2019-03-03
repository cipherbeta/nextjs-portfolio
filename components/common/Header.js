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
                <span>
                <Link prefetch href="/"><a>Home</a></Link>
                <Link prefetch href="/blog"><a>Blog</a></Link>
                <Link prefetch href="/projects"><a>Projects</a></Link>
                </span>
                <span>
                <Link prefetch href="/contact"><a className="right">Contact</a></Link>
                </span>
            </nav>
            <div className="header">
                <div className="header--top">
                    <Link href="/">
                        <div className="logo">
                            <h1>I<span className="accent">/</span>D</h1>
                        </div>
                    </Link>
                    {/* <Sandwich toggle={this.handleMenuToggle} active={this.state.offCanvasMenuOpen}/> */}
                </div>
                <div className="header--bottom">
                    <a href="#">
                        <FontAwesomeIcon icon={['fab', 'twitter']}/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={['fab', 'codepen']}/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={['fab', 'github']}/>
                    </a>
                    <a href="#">
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