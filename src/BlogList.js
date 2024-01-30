import React from 'react';

const BlogList = ({ blogPosts, searchTerm }) => {
  // Filter blog posts based on the search term
  const filteredBlogPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Blog Posts</h2>
      {filteredBlogPosts.length > 0 ? (
        <ul>
          {filteredBlogPosts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching blog posts found.</p>
      )}
    </div>
  );
};

export default BlogList;
