import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";


const TagEdit = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [status, setStatus] = useState('');

    const {data:tag, error} = useFetch(`tags/${id}`);
    const [isPending, setIsPending] = useState(false);

    useEffect( () => {
        if (tag) {
            setName(tag.name);
            setSlug(tag.slug);
            setStatus(tag.status);
        }
    }, [tag]);

    const handleSubmit = (e) => {
        e.preventDefault(); // it doesnt refresh the page
        const tag = {name, slug, status};

        setIsPending(true);

        const api_host = process.env.REACT_APP_API_HOST

        fetch(`${api_host}tags/${id}`, {
            method: 'PUT',
            header: { "Content-type": "application/json" }, // 'Content-Type': 'application/json': Specifies that the content being sent is JSON.
            body: JSON.stringify(tag) // Converts the  JavaScript object into a JSON string for the request body.
        }).then(() => {
            console.log('new blog added.')
            setIsPending(false);

            navigate('/tags'); // it navigate to home
        })
    }

    const renderForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <label>Tag name</label>
                <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />
                <label>Tag slug</label>
                <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                />
                <label>Tag status</label>
               
                <select 
                    name="status" 
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-control">

                    <option value="1">Active</option>
                    <option value="0">INactive</option>

                </select>

                {!isPending && <button>Add Tag</button>}
                {isPending && <button disabled>Adding tag...</button>}
            </form>
        );
    }

    return ( 
        <div className="tag_edit">
            <h2>Edit Tag</h2>

            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}

            {tag && renderForm()}
        </div>
     );
}
 
export default TagEdit;