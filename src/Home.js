import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {          // res (response object)
                return res.json();  // res.json=(this passes the json into a javascript object) then return it.
            })
            .then(data => {
                setBlogs(data);
            })
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />} {/* conditional templating "&& = logical and": its evaluates the left first and its true move to right */}
        </div>
    );
}   
 
export default Home;