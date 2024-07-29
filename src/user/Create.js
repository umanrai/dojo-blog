import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from './Form';

const UserCreate = () => {

  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate(); // useNavigate hook is used for redirect

  
  const handleSubmit = (e, payload) => {
    e.preventDefault(); // it doesnt refresh the page
        const user = payload;
        setIsPending(true);

      const api_host = process.env.REACT_APP_API_HOST

      fetch(`${api_host}users`, {
          method: 'POST',
          header: { "Content-type": "application/json" }, // 'Content-Type': 'application/json': Specifies that the content being sent is JSON.
          body: JSON.stringify(user) // Converts the `blog` JavaScript object into a JSON string for the request body.
      }).then(() => {
          console.log('new user added.')
          setIsPending(false);

          navigate('/users'); // it navigate to home
      })
  }
 
  return (
    <div className="create">
            <h2>Add a new User</h2>
            
            <UserForm 
              handleFormSubmit={handleSubmit}
              isPending={isPending}
              isCreating={true}
            />
        </div>
  )
}

export default UserCreate;