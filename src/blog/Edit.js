import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate(); // useNavigate hook is used for redirect

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(''); 

    const {data:blog, error} = useFetch(`blogs/${id}`);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        if (blog) {
            setTitle(blog.title);
            setBody(blog.body);
            setAuthor(blog.author);
            setIsPending(false)
        }
    }, [blog]);

    const handleSubmit = (e) => { 
        e.preventDefault(); // it doesnt refresh the page
        const blog = {title, body, author};

        setIsPending(true);

        const api_host = process.env.REACT_APP_API_HOST

        fetch(`${api_host}blogs/${id}`, {
            method: 'PUT',
            header: { "Content-type": "application/json" }, // 'Content-Type': 'application/json': Specifies that the content being sent is JSON.
            body: JSON.stringify(blog) // Converts the `blog` JavaScript object into a JSON string for the request body.
        }).then(() => {
            console.log('new blog added.')
            setIsPending(false);

            navigate('/'); // it navigate to home
        })
    }

    const renderForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title} // Use state value
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body} // Use state value
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author} // Use state value
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Update Blog</button>}
                { isPending && <button disabled>Updating...</button> }
            </form>
        );
    }

    return ( 
        <div className="edit">
        <h2>Edit Blog</h2>

        { isPending && <div>Loading...</div>}
        { error && <div>{ error }</div>}

        {blog && renderForm()} 
        
    </div>
     );
}
 
export default Edit;