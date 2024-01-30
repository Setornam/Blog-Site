import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    // Check if title and content are not empty
    if (title.trim() === '' || content.trim() === '') {
      console.log('Title and content are required.');
      return;
    }

    // Create a new post object
    const newPost = {
      id: Date.now(), // Use a unique identifier (timestamp in this case)
      title,
      content,
    };

    // Call the onAddPost callback to add the new post to the parent's state
    onAddPost(newPost);

    // Clear the input fields
    setTitle('');
    setContent('');

    // Navigate to the Home route after posting the blog
    navigate('/');
  };

  return (
    <div className="Form">
      <h2>Create a New Blog Post</h2>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleSave}>Post Blog</button>
    </div>
  );
};

export default BlogForm;
