import React from 'react';
import Layout from '../components/layout';
import {client} from '../utility/contentful';
import Head from 'next/head';

class Contact extends React.Component { 
    static async getInitialProps({req}){
        let data;
        return(
            client
                .getEntries()
                .then(entries => {
                    console.log(entries);
                    data = entries;
                    return data;
                })
            )
    }
    state = {

    }

    render(){
        return(
            <>
            <Head>
                <title>Isaac Doud - About Me</title>
            </Head>
            <div className="about_wrapper">
                <h1>About Me</h1>
                <p><i>ie: completely unprofessional introduction</i></p>
                <p>
                    My name is Isaac Doud. I'm 23, and I have a passion for creating things - especially digitally. I love working
                    with computers, both building and programming, as well as working with/developing creative content including videos,
                    music, and websites. I have four years self-taught experience working in web development - starting off with the good ol'
                    wordpress rehashing that we all start with, and now moving into React development. I'm comfortable with the norms - semantic HTML5,
                    CSS3, and ES6JS, while working towards getting a solid foundation in ReactJS and various extensions of that library. NextJS and Meteor
                    are the two I'm currently working with - the former of which is what this site was built on!
                </p>
                <h2>What I like</h2>
                <p>
                    I'm weeb trash. As such, I'm into gaming, animation, and drawing (although I'm trash at the last bit there).
                    My current show to binge watch is Tate no Yūsha no Nariagari, and I'm way too into Apex Legends at the moment.
                    
                </p>
            </div>
            </>
        )
    }
}

export default Contact