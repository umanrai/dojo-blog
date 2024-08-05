import React from 'react'
import useFetch from '../useFetch';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
 

const UserList = () => {
  const {data: users, isPending, error} = useFetch('users');
  const navigate = useNavigate();


  const handleClick = (id) => {
    const api_host = process.env.REACT_APP_API_HOST
    // SweetAlert2 (often abbreviated as 'Swal'): popular JavaScript library used for creating beautiful, customizable, and responsive alert boxes.
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You want to delete the user!",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`${api_host}users/${id}`, {
          method: 'DELETE'
        }).then(() => {
          console.log('user deleted.')
  
          navigate('/users'); // it navigate to home
        }) 
      }
    });
  };

  return (
    <div className="user_list">
            {error && <div>{ error }</div>}
            { isPending && <div> Loading... </div>}
            <h2>User List</h2>
            {users && (
              <article>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Username</th>
                      <th scope="col">Fullname</th>
                      <th scope="col">Email</th>
                      <th scope="col" >Created At</th>
                      <th scope="col">Updated At</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.image}</td>
                        <td>{user.username}</td>
                        <td nowrap="nowrap" >{user.first_name} {user.middle_name} {user.last_name}</td>
                        <td>{user.email}</td>
                        <td nowrap="nowrap">{user.created_at}</td>
                        <td nowrap="nowrap">{user.updated_at}</td>
                        <td>
                          <div className="action">
                          <Link to={`/user/edit/${user.id}`}>
                            <button className="btn btn-primary">Edit</button>
                          </Link>
                          <Link to={`/user/show/${user.id}`}>
                            <button className="btn btn-secondary">Show</button>
                          </Link>
                          <button className="btn btn-danger" onClick={() => handleClick(user.id)}>Delete</button> 
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
              </article>
            )} {/* conditional templating "&& = logical and": its evaluates the left first and its true move to right */}
    </div>

  )
}

export default UserList;