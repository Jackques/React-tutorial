import {useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(
        //[
        // {title: "first title", body: "Lorum ipsum...", author: "Jack", id: 1},
        // {title: "second title", body: "Lorum ipsum...", author: "Tim", id: 2},
        // {title: "third title", body: "Lorum ipsum...", author: "Jack", id: 3},
        // above blogs are dummy data to test if it works correctly
    //]
        null // since this is the defaultvalue, we cannot 'map/loop' over this value when setting the blogs initially, thus we should first check if blogs is available
    );

    const handleDelete = (id) => {
        debugger;
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

    useEffect(() => {
        console.log('this fires on every init & manipulation of the attached dependancies');
        setTimeout(()=>{
            fetch('http://localhost:7000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log('Data from JSON Server: ', data);
                    // Asynchronously set the blogs
                    setBlogs(data);
                    setIsPending(false);
                })
        }, 1000)
    }, []);

    const [name, setName] = useState('Mario'); // this is a dependency of the effect below
    useEffect(() => {
        console.log('this fires on every init & manipulation of the attached dependancies');
        console.log('name is: ', name);
    }, [name]);
    const [isPending,setIsPending] = useState(true);

    return (
        <div className="home">
            <h1>Homepage</h1>
            { isPending && <div>Loading... </div> }
            <div className="blog-preview">
                {/*{blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}></BlogList>}*/}
                {/*{blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Jack")} title="Jack's Blogs"*/}
                {/*          handleDelete={handleDelete} />}*/}

                {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}></BlogList>}
                {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Jack")} title="Jack's Blogs" handleDelete={handleDelete}/>}
                {!blogs && <p>No blogs here</p>}

            </div>
            <button onClick={()=>{setName('Luigi')}}> I change the state only for 'name' effect</button>
        </div>);
}
// Everything between { } is JS thus we can write (conditional) logic here i.e. checking if blogs is not null when we pass it on to BlogList

export default Home;