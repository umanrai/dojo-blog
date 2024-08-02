import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
    return (
       <div className="navbar">
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/users">User</Link>
                <Link to="/tags">Tag</Link>
                <Link to="/categories">Category</Link>
            </div>
       </div>
    );
 }
 export default Navbar;