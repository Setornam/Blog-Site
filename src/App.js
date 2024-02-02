import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import BlogForm from './BlogForm';
import Search from './Search';
import BlogList from './BlogList';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddPost = (newPost) => {
    setBlogPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <Router>
      <div className="App">
        <div className="Header">
          <h1>Blog Site</h1>
          <div className="Search">
            <Search onSearch={setSearchTerm} />
          </div>
          <div className="navigation">
            <Navigation />
          </div>
        </div>
        <div className="Content">
          {/* Define Routes */}
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/blog"
              element={
                <BlogForm onAddPost={handleAddPost} />
              }
            />
          </Routes>

          <BlogList blogPosts={blogPosts} searchTerm={searchTerm} />
        </div>
      </div>
    </Router>
  );
}

export default App;
