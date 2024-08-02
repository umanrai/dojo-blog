import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const CategoryShow= () => {
    const {id} = useParams();
    const {data:category, error, isPending} = useFetch(`categories/${id}`);

    return ( 
        <div className="category-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { category && (
                <article>
                    <h1>Category details</h1>
                    <p>Name:{ category.name }</p>
                    <p>slug:{ category.slug }</p>
                    <p>description:{ category.description }</p>
                    <p>status:{ category.status }</p>
                    <Link className="btn btn-secondary" to="/categories">back</Link>
                </article>
            )}
            
        </div>     );
}
 
export default CategoryShow