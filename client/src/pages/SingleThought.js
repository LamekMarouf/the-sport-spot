import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_THOUGHT } from "../utils/queries";

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
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
  );
};

export default SingleThought;
