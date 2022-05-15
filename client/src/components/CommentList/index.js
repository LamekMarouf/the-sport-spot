import React from "react";

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <div id="comments-title">Comments</div>
      <div className="comments">
        {comments &&
          comments.map((comment) => (
            <div className="comment-card">
              <div className="card-header">
                {comment.commentAuthor}
              </div>
              <p className="card-body">{comment.commentText}</p>
              <div className="comment-time">{comment.createdAt}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
