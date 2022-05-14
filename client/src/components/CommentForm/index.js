import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="comments">
      {Auth.loggedIn() ? (
        <>
        <div className="comment-title">
          Add Comment
        </div>
          <form className="comment-form" onSubmit={handleFormSubmit}>
            <div className="comment-box">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                className="comment-text-box"
                value={commentText}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="character-count">
              <p
                className={`${
                  characterCount === 280 || error ? "text-danger" : ""
                }`}
              >
                Character Count: {characterCount}/280
                {error && <span className="ml-2">{error.message}</span>}
              </p>
            </div>

            <div >
              <button type="submit" className="add-comment-button">Add Comment</button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
