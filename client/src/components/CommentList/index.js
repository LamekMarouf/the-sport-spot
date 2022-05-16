import React from "react";

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <div className="no-comments">No Comments Yet</div>;
  }

  return (
    <section className="comments-section">
      <div id="comments-title">Comments</div>
      <div className="comments">
        {comments &&
          comments.map((comment) => (
            <div className="comment-card">
              <div className="card-header">{comment.commentAuthor}</div>
              <p className="card-body">{comment.commentText}</p>
              <div className="comment-time">{comment.createdAt}</div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CommentList;
