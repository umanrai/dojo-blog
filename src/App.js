import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />  
            {/* :id (route parameter name), the `:id` parameter in the `/blogs/:id` route will capture part of the URL and pass it to the BlogDetails component. */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
