import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate(); // useNavigate hook is used for redirect

    // submit event
    const handleSubmit = (e) => { 
        e.preventDefault(); // it doesnt refresh the page
        const blog = {title, body, author};

        setIsPending(true);

        const api_host = process.env.REACT_APP_API_HOST

        fetch('${api_host}blogs', {
            method: 'POST',
            header: { "Content-type": "application/json" }, // 'Content-Type': 'application/json': Specifies that the content being sent is JSON.
            body: JSON.stringify(blog) // Converts the `blog` JavaScript object into a JSON string for the request body.
        }).then(() => {
            console.log('new blog added.')
            setIsPending(false);

            navigate('/'); // it navigate to home
        })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title} // above state value
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={body} // above state value
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={author} // above state value
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;