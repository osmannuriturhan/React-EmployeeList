import React from "react";
import Data from "../helper/data";

const List = ({ currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = Data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="list-main">
      {selectedItems.map((item) => {
        const { name, age, image, email } = item;
        return (
          <div className="list-item">
            <img src={image} alt={name} />
            <div className="list-item-info">
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
