import Navbar from './Navbar';
import Home from './blog/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './blog/Create';
import NOtFound from './NotFound';
import Edit from './blog/Edit';
import UserList from './user/List';

import UserCreate from './user/Create';
import UserEdit from './user/Edit';
import UserShow from './user/Show';
import TagList from './tag/List';
import TagCreate from './tag/Create';
import TagEdit from './tag/Edit';
import TagShow from './tag/Show';
import CategoryList from './category/List';
import CreateCategory from './category/Create';
import CategoryEdit from './category/Edit';
import CategoryShow from './category/Show';
import BlogList from './blog/LIst';
import BlogDetails from './blog/Show';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="My Blog" />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/create" element={<Create />} />
            <Route path="/blog/show/:id" element={<BlogDetails />} />
            <Route path="/blog/edit/:id" element={<Edit />} />
            <Route path="/blogs" element={<BlogList />} />

            <Route path="/user/create" element={<UserCreate />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/edit/:id" element={<UserEdit />} />
            <Route path="/user/show/:id" element={<UserShow />} />

            <Route path="/tags" element={<TagList />} />
            <Route path="/tag/create" element={<TagCreate />} />
            <Route path="/tag/edit/:id" element={<TagEdit />} />
            <Route path="/tag/show/:id" element={<TagShow />} />

            <Route path="/categories" element={<CategoryList />} />
            <Route path="/category/create" element={<CreateCategory />} />
            <Route path="/category/edit/:id" element={<CategoryEdit />} />
            <Route path="/category/show/:id" element={<CategoryShow />} />

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
