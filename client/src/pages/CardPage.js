import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";

import { QUERY_THOUGHTS } from "../utils/queries";

const CardPage = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <>
      <Header />
      <main className="card-page">
        <ThoughtForm />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ThoughtList thoughts={thoughts} title="All" />
        )}
      </main>
      <Footer />
    </>
  );
};

export default CardPage;
