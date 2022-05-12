import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

function NotFound() {
  return (
    <>
      <Navbar />
      <section className="not-found-page">
        <div>
          Sorry... We are still working on this page. Don't worry, it will be
          all done soon.
        </div>
        <div>
          <BsEmojiSmileUpsideDown />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
