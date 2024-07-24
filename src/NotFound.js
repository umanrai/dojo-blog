import { Link } from "react-router-dom";

const NOtFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>That page can't be found.</p>
            <Link to="/">Back to the homepage</Link>
            
        </div>
     );
}
 
export default NOtFound;