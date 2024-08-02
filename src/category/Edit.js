import { useNavigate, useParams } from "react-router-dom";
import CategoryForm from "./Form";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";

const CategoryEdit = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data: category, error} = useFetch(`categories/${id}`);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        if (category) {
            setIsPending(false)
        } 
    }, [category]);

    const handleSubmit = (e, payload) => { 
        e.preventDefault(); // it doesnt refresh the page
        const category = payload;
    
        setIsPending(true);
    
        const api_host = process.env.REACT_APP_API_HOST
    
        fetch(`${api_host}categories/${id}`, {
            method: 'PUT',
            header: { "Content-type": "application/json" }, // 'Content-Type': 'application/json': Specifies that the content being sent is JSON.
            body: JSON.stringify(category) // Converts the `blog` JavaScript object into a JSON string for the request body.
        }).then(() => {
            console.log('edited category.')
            setIsPending(false);
    
            navigate('/categories'); // it navigate to home
        })
    }

    return ( 
        <div className="category_edit">
            <h2>Edit Category</h2>

            { isPending && !error && <div>Loading...</div>}
            { error && <div>{ error }</div>}

            {category && <CategoryForm 
                category={category} 
                isPending={isPending} 
                handleFormSubmit={handleSubmit} 
            />} 
        </div>
     );
}
 
export default CategoryEdit;