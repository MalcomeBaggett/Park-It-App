import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import StateList from "./components/StateList";
function App() {
  return (
    <Fragment>
      <div className="container">
        <section class="hero is-primary columns">
          <div class="hero-body column">
            <p class="title">Park It!</p>
            <p class="subtitle">Search National Parks in the USA!</p>
          </div>
        </section>
        <StateList />
      </div>
    </Fragment>
  );
}

export default App;
