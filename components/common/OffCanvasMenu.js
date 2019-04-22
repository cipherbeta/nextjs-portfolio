import React from "react";
import Link from "next/link";
import posed, { PoseGroup } from "react-pose";

const OffCanvasMenuWrapper = posed.div({
    enter: {
        opacity: 1,
        y: 0,
        beforeChildren: false,
        staggerChildren: 20,
        delayChildren: 20
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: { duration: 30 },
        delayChildren: 20,
        beforeChildren: true
    }
});

const OffCanvasMenuSection = posed.div({
    enter: {
        opacity: 1,
        y: 20,
        staggerChildren: 10,
        beforeChildren: true
    },
    exit: {
        opacity: 0,
        y: -30
    }
});

const OffCanvasMenuA = posed.a({
    enter: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 10
    }
});

const OffCanvasMenu = props => (
    <PoseGroup>
        {props.isActive && [
            <OffCanvasMenuWrapper className="offcanvasmenu" key="ofcmenu">
                <OffCanvasMenuSection>
                    <h1 style={{ margin: 0, padding: 0 }}>Isa Doud</h1>
                    <small style={{ marginBottom: "2em" }}>
                        Front End Developer // Creative
                    </small>
                </OffCanvasMenuSection>

                <OffCanvasMenuSection>
                    <Link prefetch href="/">
                        <OffCanvasMenuA onClick={props.toggle}>
                            Home
                        </OffCanvasMenuA>
                    </Link>
                    <Link prefetch href="/about">
                        <OffCanvasMenuA onClick={props.toggle}>
                            About
                        </OffCanvasMenuA>
                    </Link>
                    <Link prefetch href="/blog">
                        <OffCanvasMenuA onClick={props.toggle}>
                            Blog
                        </OffCanvasMenuA>
                    </Link>
                    <Link prefetch href="/projects">
                        <OffCanvasMenuA onClick={props.toggle}>
                            Projects
                        </OffCanvasMenuA>
                    </Link>
                    <Link prefetch href="/contact">
                        <OffCanvasMenuA onClick={props.toggle}>
                            Contact
                        </OffCanvasMenuA>
                    </Link>
                </OffCanvasMenuSection>
            </OffCanvasMenuWrapper>
        ]}
    </PoseGroup>
);

export default OffCanvasMenu;
