// const BlogList = (props) => {

const BlogList = ({blogs, title, handleDelete}) => {
    debugger;
    // Alternatively, I could also put the values passed above in their own local variabeles first
    // const blogs = props.blogs;
    // const title = props.title;

    // return (
    //     <h2>{title}</h2>
    // {blogs.map(blog => (
    //         <div className="blog-preview" key={blog.id}>
    //             <div className="blog-header">
    //                 <h1>{blog.title}</h1>
    //             </div>
    //             <div className="blog-body">
    //                 {blog.body}
    //             </div>
    //             <div className="blog-footer">
    //                 Written by {blog.author}
    //             </div>
    //         </div>
    //     ))}
    // <div>some footer</div>
    // );

    //todo: why can i not put any HTML code before the first HTML tag of the template <div className=..
    // or after the last HTML tag of the template (</div>..)?
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <div className="blog-body">
                        {blog.body}
                    </div>
                    <p>Written by {blog.author}</p>
                    {/*<button onClick={()=> handleDelete(blog.id)}>Delete blog</button>*/}
                </div>
            ))}
        </div>
    );
};

export default BlogList;