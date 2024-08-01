import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TagCreate = () => {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [status, setStatus] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const tag = {name, slug, status};

        setIsPending(true);

        const api_host = process.env.REACT_APP_API_HOST

        fetch(`${api_host}tags`, {
            method: 'POST',
            header: { "Content-type": "application/json" },
            body: JSON.stringify(tag)
        }).then(() => {
            console.log('new tag.')
            setIsPending(false);

            navigate('/tags');
        })
    }

    return (
        <div className="tag_create">
            <h2>Create Tag</h2>
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

                <select name="status" id="status" 
                onChange={(e) => setStatus(e.target.value)}
                className="form-control">
                    <option value="1" selected={status === 1}>Active</option>
                    <option value="0" selected={status == 0}>INactive</option>
                </select>

                {/* <input
                type="bool"
                required
                value={status}
                
                /> */}

                {!isPending && <button>Add Tag</button>}
                {isPending && <button disabled>Adding tag...</button>}
            </form>
        </div> 
     );
}
 
export default TagCreate;