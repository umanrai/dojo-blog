import React, { useEffect, useState } from 'react'

const UserForm = ( { user, handleFormSubmit, isPending, isCreating } ) => {

    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [created_at, setCreated_at] = useState('');
    const [updated_at, setUpdated_at] = useState('');

    useEffect(() => {
        if (user) {
            setFirstName(user.first_name);
            setMiddleName(user.middle_name);
            setLastName(user.last_name);
            setImage(user.image);
            setPassword(user.password);
            setEmail(user.email);
            setUserName(user.username);
            setCreated_at(user.created_at);
            setUpdated_at(user.updated_at);            
        } 
      }, [user]);
    

      const handleSubmit = (e) => {
        return handleFormSubmit(e, {first_name, middle_name, last_name, image, password, email, username, created_at, updated_at})
      }


    return (
        <>
            <form onSubmit={(handleSubmit)}>
                  <label>First name</label>
                  <input
                  type="text" 
                  required
                  value={first_name} 
                  onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label>Middle name</label>
                  <input
                  type="text" 
                  value={middle_name} 
                  onChange={(e) => setMiddleName(e.target.value)}
                  />
                  <label>Last name</label>
                  <input
                  type="text" 
                  required
                  value={last_name} 
                  onChange={(e) => setLastName(e.target.value)}
                  /><label>Image</label>
                  <input 
                  type="text"
                  required
                  value={image} // above state value
                  onChange={(e) => setImage(e.target.value)}
                  />
                  <label>Email</label>
                  <input 
                  type="email"
                  required
                  value={email} // above state value
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Username</label>
                  <input 
                  type="text"
                  required
                  value={username} // above state value
                  onChange={(e) => setUserName(e.target.value)}
                  />
                  <label>Password</label>
                  <input 
                  type="password"
                  required
                  value={password} // above state value
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Created at</label>
                  <input 
                  type="datetime-local"
                  required
                  value={created_at} // above state value
                  onChange={(e) => setCreated_at(e.target.value)}
                  />
                  <label>Updated at</label>
                  <input 
                  type="datetime-local"
                  required
                  value={updated_at} // above state value
                  onChange={(e) => setUpdated_at(e.target.value)}
                  />
                  { !isPending && <button>{isCreating ? 'Add User' : 'Update User'}</button> }
                  { isPending && <button disabled>{isCreating ? 'Adding User...' : 'Updating User...'}</button> }            
                </form>
        </>
    )
}

export default UserForm