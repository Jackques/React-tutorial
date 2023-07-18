import {useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:7000/blogs');
    // data: blogs = whatever is exported into 'data' from useFetch is now going into 'blogs' INSTEAD as a local variabele

    /* code below is disabled because setBlogs has now been moved to useFetch.js AND the narrator of the tutorial also removed it in his example at around video 16-18.
       but I wanted to keep it around for the sake of having an example. */
    // const handleDelete = (id) => {
    //     debugger;
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        console.log('this fires on every render (i.e. init), so if i remove a blog.. i get executed again! (re-render)');

        // be carefull when changing the state here! It might cause a continues loop because;
        // if I were to auto remove a blog via a method here, that would cause a re-render
        // which causes this 'useEffect' to be run again
        // which would theoretically remove another blog
        // which would cause this 'useEffect' to be run again, and so forth
    });

    const [name, setName] = useState('Mario'); // this is a dependency of the effect below

    useEffect(() => {
        console.log('this fires on every init & manipulation of the attached dependancies');
        console.log('name is: ', name);
    }, [name]);

    return (
        <div className="home">
            <h1>Homepage</h1>
            { error && <div>Could not fetch data from the server.</div> }
            { isPending && <div>Loading... (1 sec delay) </div> }
            <div className="blog-preview">
                {/*{blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}></BlogList>}*/}
                {/*{blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Jack")} title="Jack's Blogs" handleDelete={handleDelete}/>}*/}
                {/*{!blogs && <p>No blogs here</p>}*/}

                {blogs && <BlogList blogs={blogs} title="All blogs"></BlogList>}
                {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "jack")} title="Jack's Blogs" />}
                {!blogs && <p>No blogs here</p>}

            </div>
            <button onClick={()=>{setName('Luigi')}}> I change the state only for 'name' effect</button>
        </div>);
}
// Everything between { } is JS thus we can write (conditional) logic here i.e. checking if blogs is not null when we pass it on to BlogList

export default Home;