import React, { useState } from "react";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";

const Home = () => {
    // TODO: A state that stores book queries

  return (
    <div className="container">
      <Hero>
        <div className="heroText">
          <h1 className="heroHeader">React Google Books Search</h1>
          <p className="heroP">Search for and save books.</p>
        </div>
      </Hero>
      <div className="bookSearch">
          <SearchForm />
      </div>
    </div>
  );
};

export default Home;
