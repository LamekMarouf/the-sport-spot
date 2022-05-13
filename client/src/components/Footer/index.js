import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <section className="footer">
      <div>Created By Lamek Marouf </div>
    </section>
  );
};

export default Footer;
