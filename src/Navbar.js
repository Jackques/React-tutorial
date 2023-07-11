import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/*<a href="/">Home</a>*/}
                {/*<a href="/create">New blog</a>*/}
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>

                {/*
                The <Link> component truly makes this a SPA, because normally with anchor tags, we would still be making a different request to the server each time we click on one of those anchor tags.
                Now when we click on a <Link> tag (which in de DOM is rendered to a <a> tag anyway), React intercepts those requests to the server and provides the HTML content for us (since it is stored in the client anyway).
                Content is retrieved by the use of HTTP requests we built ourselves.
                */}
            </div>
        </nav> );
}

export default Navbar;