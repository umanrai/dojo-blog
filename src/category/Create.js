import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryForm from './Form';

const CreateCategory = () => {
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e, payload) => {
        e.preventDefault(); // it doesnt refresh the page
        const category = payload;
        setIsPending(true);

        const api_host = process.env.REACT_APP_API_HOST

        fetch(`${api_host}categories`, { // `` = string literals used for concat
            method: 'POST',
            header: { "Content-type": "application/json" }, // 'Content-Type': 'application/json': Specifies that the content being sent is JSON.
            body: JSON.stringify(category) // Converts the `category` JavaScript object into a JSON string for the request body.
        }).then(() => {
            console.log('new category added.')
            setIsPending(false);

            navigate('/categories'); // it navigate to home
        }) 
    }

    return ( 
        <div className="create">
            <h2>Create a new Category</h2>
            
            <CategoryForm 
              handleFormSubmit={handleSubmit}
              isPending={isPending}
              isCreating={true}
            />
        </div>
     );
}
 
export default CreateCategory;