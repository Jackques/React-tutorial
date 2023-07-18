import {useState} from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(false);
        const blog = {title, body, author};

        console.log(blog);
        fetch('http://localhost:7000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then((rep) => {
            console.log('new blog added: ', rep.ok);
            setIsPending(true);
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" value={title} onChange={
                    (e) => setTitle(e.target.value)
                } required/>

                <label>Blog body:</label>
                <textarea value={body} onChange={
                    (e) => setBody(e.target.value)
                } required/>

                <label>Blog author:</label>
                <select value={author} onChange={
                    (e) => setAuthor(e.target.value)
                }>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="jack">Jack</option>
                </select>

                <button disabled={isPending} type="submit">Add blog</button>
            </form>

            <div className="sneakPreviewValues">
                <p>Sneak preview of the values:</p>
                <p>Title: {title.length > 0 ? title : "-"}</p>
                <p>Body: {body ? body : "-"}</p>
                <p>Author: {author}</p>
            </div>
        </div>
    );
}

export default Create;