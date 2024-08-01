import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const TagShow = () => {
    const {id} = useParams();
    const {data:tag, error, isPending} = useFetch(`tags/${id}`);

    return ( 
        <div className="tag-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { tag && (
                <article>
                    <h1>Tag details</h1>
                    <p>{ tag.name }</p>
                    <p>{ tag.slug }</p>
                    <p>{ tag.status }</p>
                    <Link className="btn btn-secondary" to="/tags">back</Link>
                </article>
            )}
            
        </div>
     );
}
 
export default TagShow;