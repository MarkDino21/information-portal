import React from "react";

const Comment = ({ name, date, comment }) => (
  <div className="comment-container">
    <div className="o-flex user">
      <div className="name">{name}</div>
      <div className="date">{date}</div>
    </div>
    <div className="comment">{comment}</div>
  </div>
);

export default Comment;
