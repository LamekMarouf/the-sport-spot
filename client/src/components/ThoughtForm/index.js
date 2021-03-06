import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";
import { QUERY_THOUGHTS } from "../../utils/queries";

import Auth from "../../utils/auth";

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "thoughtText" && value.length <= 1000) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };

  const displayAdd = () => {
    const navbarSide = document.getElementById("summary-box");
    navbarSide.classList.toggle("hidden");
  };

  return (
    <>
      <div className="show-add-box">
        <div id="show-add" onClick={displayAdd}>
          Add a summary
        </div>
      </div>
      <div id="summary-box" className="hidden">
        {Auth.loggedIn() ? (
          <>
                  <div className="summary-title">Add a summary</div>

            <form onSubmit={handleFormSubmit} className="summary-text-box">
              <div>
                <textarea
                  name="thoughtText"
                  className="summary-text"
                  placeholder="Description..."
                  value={thoughtText}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="character-count">
                Character Count: {characterCount}/1000
              </div>

              <div>
                <button type="submit" className="add-summary-button">
                  Add
                </button>
              </div>
              {error && <div>{error.message}</div>}
            </form>
          </>
        ) : (
          <div className="not-logged-in">
            You need to be logged in to share your thoughts. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ThoughtForm;
