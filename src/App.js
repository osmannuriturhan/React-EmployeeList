import React, { useState } from "react";
import List from "./components/List";
import Data from "./helper/data";
import "./styles/style.css";

function App() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Data.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = startItem + itemsPerPage - 1;

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {startItem} to {Math.min(endItem, Data.length)})
        </h5>
        <List currentPage={currentPage} itemsPerPage={itemsPerPage} />
        <div className="btn1">
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
