import React, { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_THOUGHT } from "../utils/queries";

const SingleThought = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loadingTwo, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loadingTwo) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {loading ? (
        <div className="loader">
          <SyncLoader
            size={10}
            color={"#8c799e"}
            loading={loading}
            speedMultiplier={0.6}
          />
        </div>
      ) : (
        <>
          <Header />
          <div className="comment-page">
            <div className="title">Summary</div>
            <div className="post">{thought.thoughtText}</div>

            <CommentList comments={thought.comments} />
            <CommentForm thoughtId={thought._id} />
          </div>
          <Footer />
        </>
      )}
      ;
    </>
  );
};

export default SingleThought;
