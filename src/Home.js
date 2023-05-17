import {useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "first title", body: "Lorum ipsum...", author: "Jack", id: 1},
        {title: "second title", body: "Lorum ipsum...", author: "Tim", id: 2},
        {title: "third title", body: "Lorum ipsum...", author: "Jack", id: 3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('this fires on every render (i.e. init), so if i remove a blog.. i get executed again! (re-render)');

        // be carefull when changing the state here! It might cause a continues loop because;
        // if I were to auto remove a blog via a method here, that would cause a re-render
        // which causes this 'useEffect' to be run again
        // which would theoretically remove another blog
        // which would cause this 'useEffect' to be run again, and so forth
    });

    return (
        <div className="home">
            <h1>Homepage</h1>

            <div className="blog-preview">
                <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}></BlogList>
                <BlogList blogs={blogs.filter((blog) => blog.author === "Jack")} title="Jack's Blogs"
                          handleDelete={handleDelete}></BlogList>
            </div>
        </div>);
}

export default Home;