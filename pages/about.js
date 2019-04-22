import React from "react";
import Layout from "../components/layout";
import { client } from "../utility/contentful";
import Head from "next/head";

class Contact extends React.Component {
    static async getInitialProps({ req }) {
        let data;
        return client.getEntries().then(entries => {
            console.log(entries);
            data = entries;
            return data;
        });
    }
    state = {};

    render() {
        return (
            <>
                <Head>
                    <title>Isaac Doud - About Me</title>
                </Head>
                <div className="about_profilepic">
                    <img src="/static/images/profilepicture.jpg" />
                </div>
                <div className="about_wrapper">
                    <div className="about_left">
                        <h1 className="accent">The Short & Professional:</h1>
                        <p>
                            A self-taught Front End Web Developer with a strong foundation in
                            semantic HTML5, CSS3/SASS, and ES6 JS. Good foundation in ReactJS, with
                            experience in NextJS and MeteorJS. Plenty of experience in the Adobe
                            Suite and Office Suite. Experience with Windows/OSX/Linux.
                        </p>
                        <h1 className="accent">The Unprofessional:</h1>
                        <p>
                            I'm into vidya, and I'm also weeb trash. I'm currently way too invested
                            in Final Fantasy 14 and Apex Legends - and I'm stuck on a neverending
                            quest to get back into Masters as a (nerfed into the ground) Lucio main
                            in Overwatch. Getting pretty invested in The Promised Neverland and The
                            Legend of the Shield Hero for this season of anime. I'm working on
                            starting up a Youtube channel for random gaming/anime related stuff,
                            since I enjoy editing a good bit.
                        </p>
                    </div>
                    <div className="about_right">
                        <h1 className="accent">The Long:</h1>
                        <p>
                            My name is Isaac Doud. I'm 23, and I have a passion for creating things
                            - especially digitally. I love working with computers, both building and
                            programming, as well as working with/developing creative content
                            including videos, music, and websites. I have four years self-taught
                            experience working in web development - starting off with the good ol'
                            wordpress rehashing that we all start with, and now moving into React
                            development.
                        </p>
                        <p>
                            I'm comfortable with the norms - semantic HTML5, CSS3, and ES6JS, while
                            working towards getting a solid foundation in ReactJS and various
                            extensions of that library. NextJS and Meteor are the two I'm currently
                            working with - the former of which is what this site was built on! My
                            goal is to transition into full stack development territory - whether
                            that involves diving into the .net stack or diving headfirst into
                            NodeJS, I'm not entirely sure where it'll take me at this point. I have
                            some projects in the works (mostly using Meteor) that I'm using to teach
                            myself the general workflow/thought process behind fullstack development
                            - and I'm looking to see where that will take me.
                        </p>
                        <p>
                            There's some other things I've got under my belt - I've got a lot of
                            time in on the Adobe suite, specifically Photoshop and Premiere, but I'm
                            comfortable using most of the suite. I've been playing with DaVinci
                            Resolve a bit, and enjoy using that quite a bit as well. I'm comfortable
                            with pretty much any OS - Windows, OSX, and Linux - even some hijacked
                            Android distros. Along that route as well, I enjoy building and modding
                            computers. I've built three rigs myself, and have been slowly upgrading
                            my current rig as funds have miraculously found their way to it.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;
