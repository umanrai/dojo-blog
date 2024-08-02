import React, { useEffect, useState } from "react";

const CategoryForm = ({ category, handleFormSubmit, isPending, isCreating } ) => {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (category) {
               setName(category.name);
               setSlug(category.slug);
               setDescription(category.description);
               setStatus(category.status);       
        } 
      }, [category]);

      const handleSubmit = (e) => {
        return handleFormSubmit(e, {name, slug, description, status})
      }

    return ( 
        <>
            <form onSubmit={(handleSubmit)}>
                <label>Name</label>
                <input
                type="text"
                className="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Slug</label>
                <input
                type="text"
                className="form-control"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                />

                <label>Description</label>
                <textarea 
                name='description'
                type='text'
                value={description}
                required
                className="form-control"
                onChange={e => setDescription(e.target.value)} >
                </textarea>
                
                <label>Category status</label>
                <select name="status" id="status" 
                onChange={(e) => setStatus(e.target.value)}
                className="form-control">
                    <option value="1" selected={status === 1}>Active</option>
                    <option value="0" selected={status == 0}>Inactive</option>
                </select>
                { !isPending && <button className="btn btn-primary mt-3">{isCreating ? 'Add Category' : 'Update Category'}</button> }
                { isPending && <button className="btn btn-primary mt-3" disabled>{isCreating ? 'Adding Category...' : 'Updating Category...'}</button> }
            </form>
        </>
     );
}
 
export default CategoryForm;