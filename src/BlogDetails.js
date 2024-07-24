import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`); // url concatenation: http://localhost:8000/blogs with id in template string.
    const navigate = useNavigate(); // useNavigate hook is used for redirect

    
    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
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
                    <button onClick={handleClick}>delete</button> 
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;