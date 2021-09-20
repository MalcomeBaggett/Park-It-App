import React, { useState, useEffect } from "react";
import StateCard from "./StateCard";
import { getParks } from "../lib/npsApiHandler";
export default (props) => {
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
  const indexOfLastCard = currentPage * 15;
  const indexOfFirstCard = indexOfLastCard - 15;
  const current = parks.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (page) => {
    const curr = currentPage + page;
    if (curr <= 0 || curr > totalPages) {
      return;
    }
    setCurrentPage(() => {
      return curr;
    });
  };
  return (
    <>
      <div className="columns is-multiline">
        {current.map((el) => {
          if (el.description.length > 150) {
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
    </>
  );
};
