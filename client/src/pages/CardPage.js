import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import SyncLoader from "react-spinners/SyncLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";
import { QUERY_THOUGHTS } from "../utils/queries";

const CardPage = () => {
  const { loadingTwo, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <SyncLoader
            size={10}
            color={"#d0d0d0"}
            loading={loading}
            speedMultiplier={0.6}
          />
        </div>
      ) : (
        <>
          <Header />
          <main className="card-page">
            <ThoughtForm />
            {loadingTwo ? (
              <div>Loading...</div>
            ) : (
              <ThoughtList thoughts={thoughts} title="All" />
            )}
          </main>
          <Footer />
        </>
      )}
      ;
    </>
  );
};

export default CardPage;
