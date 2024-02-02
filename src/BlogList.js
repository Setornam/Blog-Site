import React from 'react';


const BlogList = ({ blogPosts, searchTerm }) => {
  const filteredBlogPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Blog">
      <h2>Blog Posts</h2>
      {filteredBlogPosts.length > 0 ? (
        <ul className="blogList">
          {filteredBlogPosts.map((post) => (
            <li key={post.id} className="blogListItem">
              <strong>{post.title}</strong>
              <p>{post.content}</p>
              <div className="buttons">
              </div>
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