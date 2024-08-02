import { useNavigate, useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch(`blogs/${id}`); // url concatenation: http://localhost:8000/blogs with id in template string.
    const navigate = useNavigate(); // useNavigate hook is used for redirect

    
    const handleClick = () => {

        const api_host = process.env.REACT_APP_API_HOST

        fetch(`${api_host}blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted.')
    
            navigate('/'); // it navigate to home
        })    
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div>{blog.body}</div>
                    {/* delete functionality */}
                    <Link to={`/blog/edit/${blog.id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={handleClick}>delete</button> 
                </article>
            )}
            
        </div>
     );
}
 
export default BlogDetails;