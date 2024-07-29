import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NOtFound from './NotFound';
import Edit from './Edit';
import UserList from './user/List';

import UserCreate from './user/Create';
import UserEdit from './user/Edit';
import UserShow from './user/Show';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="My Blog" />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/create" element={<Create />} />
            <Route path="/user/create" element={<UserCreate />} />
            <Route path="/user/edit/:id" element={<UserEdit />} />
            <Route path="/user/show/:id" element={<UserShow />} />
            <Route path="/edit/:id" element={<Edit />} />

            {/* :id (route parameter name), the `:id` parameter in the `/blogs/:id` route will capture part of the URL and pass it to the BlogDetails component. */}
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NOtFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
