import {useState} from "react";

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: "first title", body: "Lorum ipsum...", author: "Jack", id: 1},
        {title: "second title", body: "Lorum ipsum...", author: "Tim", id: 2},
        {title: "third title", body: "Lorum ipsum...", author: "John", id: 3},
    ]);
    return (
        <div className="home">
            <h1>Homepage</h1>

            <div className="blog-preview">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <div className="blog-header">
                            <h1>{blog.title}</h1>
                        </div>
                        <div className="blog-body">
                            {blog.body}
                        </div>
                        <div className="blog-footer">
                            Written by {blog.author}
                        </div>
                    </div>
                ))}
            </div>
        </div>);
}

export default Home;