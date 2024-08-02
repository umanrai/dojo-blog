import React from "react";
import useFetch from "../useFetch";
import { Link, useNavigate } from "react-router-dom";

const CategoryList = () => {
    const {data: categories, isPending, error} = useFetch('categories');
    const navigate = useNavigate();

    const handleClick = (id) => {
        const api_host = process.env.REACT_APP_API_HOST
    
            fetch(`${api_host}categories/${id}`, {
                method: 'DELETE'
            }).then(() => {
                console.log('category is deleted.')
        
                navigate('/categories'); // it navigate to home
            }) 
    };

    return ( 
        <div className="category_list">
            { error && <div>{error}</div> }
            {isPending && <div>Loading...</div> }

            <h2>Category List</h2>
            <Link to={`/category/create`} className="btn btn-primary">Add</Link>

            {categories && (
                <article>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* index ( it is used for each loop id, so it can track) */}
                            {categories.map((category, index) => (
                                <tr key={index}>
                                    <td>{category.name}</td>
                                    <td>{category.slug}</td>
                                    <td>{category.description}</td>
                                    <td>
                                        {/* ` ` = string literals(it is used for to concatination of string and dinamic value. $ is used for concatinate ) */}
                                        <span className={`badge bg-${category.status == 0 ? "danger" : "primary"}`}>
                                            {category.status == 0 ? "inactive" : "active"}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="category_action">
                                            <Link to={`/category/edit/${category.id}`} className="btn btn-primary">Edit</Link>
                                            <Link to={`/category/show/${category.id}`}className="btn btn-secondary">Show</Link>
                                            <Link className="btn btn-danger" onClick={() => handleClick(category.id)}>Delete</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            )}

        </div>
     );
}
 
export default CategoryList;