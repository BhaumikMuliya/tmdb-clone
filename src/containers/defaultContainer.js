import React from "react";

import './defaultContainer.css';
import Header from "../components/header";
import Footer from "../components/footer";

function DefaultContainer({ children }) {
  return (
    <>
      <Header />
      <section className='wrap_body'>
        {children}
      </section>
      <Footer />
    </>
  );
}

export default DefaultContainer;