import {useParams} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    // the 'useParams' will retrieve the desired parameters from the current url on init of this component,
    // similair to Angular's "this.route.snapshot.paramMap.get('?')"
    // The desired parameter defined inside the curly braces after const from equal the parameter name set
    // in the routes (which can be found in App.js)

    const { data: blog, error, isPending } = useFetch('http://localhost:7000/blogs/' + id);

    return (
        <div className="blog-details">
            {/*<h2>Blog details - { id } </h2>*/}
            { isPending && <div>Loading...</div>}
            { error & <div> {error} </div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
    );
}
export default BlogDetails;