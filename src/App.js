import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import { getParks } from "./lib/npsApiHandler";
import StateCard from "./components/StateCard.jsx";
function App() {
  const [parks, setParks] = useState([]);
  const [stateCode, setStateCode] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadParks = async () => {
      const parksData = await getParks();
      const codes = new Set();
      parksData.forEach((el) => {
        codes.add(el.states);
      });
      const totalNumberOfPages = parseInt(Math.ceil(parksData.length / 15), 10);
      setParks(() => {
        return parksData;
      });
      setStateCode(() => {
        return codes;
      });
      setTotalPages(() => {
        return totalNumberOfPages;
      });
    };
    loadParks();
  }, []);
  // pagination logic
  const indexOfLastCard = currentPage * 15;
  const indexOfFirstCard = indexOfLastCard - 15;
  const current = parks.slice(indexOfFirstCard, indexOfLastCard);
  console.log(parks);
  console.log(stateCode);
  console.log(totalPages);
  console.log(current);

  const paginate = (page) => {
    const curr = currentPage + page;
    if (curr <= 0) {
      return;
    }
    setCurrentPage(() => {
      return curr;
    });
  };
  return (
    <Fragment>
      <div className="container">
        <section class="hero is-primary columns">
          <div class="hero-body column">
            <p class="title">Park It!</p>
            <p class="subtitle">Search National Parks in the USA!</p>
          </div>
        </section>
        <div className="columns is-multiline">
          {current.map((el) => {
            if (el.description.length > 200) {
              el.description = el.description.slice(0, 200);
            }
            return (
              <StateCard
                name={el.fullName}
                desc={el.description}
                img={el.images[0].url}
                key={el.id}
              />
            );
          })}
        </div>
        <nav class="pagination">
          <a
            className="pagination-previous"
            onClick={() => {
              paginate(-1);
            }}
          >
            Previous
          </a>
          <a
            className="pagination-next"
            onClick={() => {
              paginate(1);
            }}
          >
            Next page
          </a>
        </nav>
      </div>
    </Fragment>
  );
}

export default App;
