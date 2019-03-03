import Layout from '../components/layout';
import Link from 'next/link';

class Home extends React.Component { 
    state = {

    }

    render(){
        return(
            <>
                <div className="introduction">
                    <div className="introduction--picture">
                    
                    </div>
                    <div className="introduction--stinger">
                    <small>Well hello there.</small>
                    <h1>My name is Isa.</h1>
                    <p>I'm a front end developer and creative currently living in Green Bay, WI.<br/>
                    I build websites and enjoy creating digital content (videos/music) as a hobby.<br/>
                    This is my little corner of the internet. Feel free to check out what I'm up to.</p>
                    <Link href="/blog"><button>Blog</button></Link>
                    <Link href="/contact"><button>Contact</button></Link>
                    </div>
                </div>
                <div className="bigthree">
                    <div className="bigthree--section">
                    <h1>Front End Web Development</h1>
                    <p>
                        I'm a self-taught front end web developer. I'm comfortable with front end work
                        in general, including common tooling. Semantic HTML5, CSS3/SCSS, ES6+ JS for my core with
                        a focus on ReactJS development. Looking to learn fullstack dev soon!
                    </p>
                    </div>
                    <div className="bigthree--section">
                    <h1>Music Production</h1>
                    <p>
                        On a whim a few years back, I picked up FL Studio during a sale. That was a mistake.
                        I've ended up spending a lot of time in there making various small tracks and recordings.
                        While I'm not a great producer, I can make some decent tracks in a cinch if needed.
                    </p>
                    </div>
                    <div className="bigthree--section">
                    <h1>Video Production</h1>
                    <p>
                        I have a good amount of experience editing and assembling videos in Premiere Pro, as well
                        as experience inside Adobe Audition and FL Studio for mastering audio for videos. It's something
                        I enjoy doing every once in a while. Eventually when I get off my lazy arse I want to start a YT channel.
                    </p>
                    </div>
                </div>
                </>
        )
    }


}

export default Home;