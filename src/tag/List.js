import React from "react";
import useFetch from "../useFetch";
import { Link, useNavigate } from "react-router-dom";

const TagList = () => {
    const {data: tags, isPending, error} = useFetch('tags');
    const navigate = useNavigate();

    const handleClick = (id) => {
        const api_host = process.env.REACT_APP_API_HOST
    
            fetch(`${api_host}tags/${id}`, {
                method: 'DELETE'
            }).then(() => {
                console.log('tag deleted.')
        
                navigate('/tags'); // it navigate to home
            }) 
    };

    const getStatus = (tag) =>{
        // if (tag.status == 0) {
        //     return "inactive"
        // } else {
        //     return "active"
        // }
        return (tag.status == 0 ? "inactive" : "active");
    }

    return (
        <div className="tag_list">
            {error && <div>{ error }</div>}
            {isPending && <div> 
                LOading... </div>
                }
            <h2>Tag List</h2>

            <Link to={`/tag/create`} className="btn btn-primary">
                Add
            </Link>

            {tags && (
                <article>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tags.map((tag, index) => (
                                <tr key={index}>
                                    <td>{tag.name}</td>
                                    <td>{tag.slug}</td>
                                    <td>
                                        {/* {getStatus(tag)} */}
                                        {/* ` ` = string literals(it is used for to concatination of string and dinamic value. $ is used for concatinate ) */}
                                        <span className={`badge bg-${tag.status == 0 ? "danger" : "primary"}`}> 
                                            {tag.status == 0 ? "Inactive" : "Active"}
                                        </span> 
                                        {/* {tag.status == 0 ? <span class="badge bg-danger">Inactive</span> : <span class="badge bg-primary">Active</span>} */}
                                    </td>
                                    <td>
                                        <div className="action">
                                            <Link to={`/tag/edit/${tag.id}`}>
                                                <button className="btn btn-primary">Edit</button>
                                            </Link>
                                            <Link to={`/tag/show/${tag.id}`}>
                                                <button className="btn btn-secondary">Show</button>
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => handleClick(tag.id)}>Delete</button> 
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
 
export default TagList;