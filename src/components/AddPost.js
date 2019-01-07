import React from "react";

const AddPost = ({ onChange, onClick, hasNoPost }) => (
  <div className="post-form-container">
    <textarea className="post-input" rows="5" onChange={onChange} />
    <button className="btn btn-primary" onClick={onClick} disabled={hasNoPost}>
      Post
    </button>
  </div>
);

export default AddPost;
