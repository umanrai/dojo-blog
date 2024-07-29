import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const UserShow = () => {
    const {id} = useParams();
    const {data:user, error, isPending} = useFetch(`users/${id}`);
    const navigate = useNavigate();

    return ( 
        <div className="user-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { user && (
                <article>
                    <h1>User details</h1>
                    <p>{ user.first_name } { user.middle_name } { user.last_name }</p>
                    <p>{ user.email }</p>
                    <p>{ user.created_at }</p>
                    {/* delete functionality */}
                    {/* <Link to={`/edit/${blog.id}`}>
                        <button>Edit</button>
                    </Link> */}
                    <Link className="btn btn-secondary" to="/users">back</Link>
                </article>
            )}
            
        </div>
     );
}
 
export default UserShow;