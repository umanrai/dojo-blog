import BlogList from "./LIst";
import useFetch from "../useFetch";

const Home = () => {
    // data:blogs (renaming the data to blogs) 
    const {data: blogs, isPending, error} = useFetch('blogs');

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            { isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />} {/* conditional templating "&& = logical and": its evaluates the left first and its true move to right */}
        </div>
    );
}   
 
export default Home;