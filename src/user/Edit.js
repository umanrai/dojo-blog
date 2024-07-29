import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import UserForm from "./Form";

const UserEdit = () => {
  const {id} = useParams();
 
  const navigate = useNavigate(); // useNavigate hook is used for redirect

  const {data: user, error} = useFetch(`users/${id}`);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    if (user) {
        setIsPending(false)
    } 
  }, [user]);

  const handleSubmit = (e, payload) => { 
    e.preventDefault(); // it doesnt refresh the page
    const user = payload;

    setIsPending(true);

    const api_host = process.env.REACT_APP_API_HOST

    fetch(`${api_host}users/${id}`, {
        method: 'PUT',
        header: { "Content-type": "application/json" }, // 'Content-Type': 'application/json': Specifies that the content being sent is JSON.
        body: JSON.stringify(user) // Converts the `blog` JavaScript object into a JSON string for the request body.
    }).then(() => {
        console.log('edited user.')
        setIsPending(false);

        navigate('/users'); // it navigate to home
    })
}

  return (
    <div className="edit">
        <h2>Edit User</h2>

        { isPending && !error && <div>Loading...</div>}
        { error && <div>{ error }</div>}

        {user && <UserForm 
          user={user} 
          isPending={isPending} 
          handleFormSubmit={handleSubmit} />} 
        
    </div>  )
}

export default UserEdit;
