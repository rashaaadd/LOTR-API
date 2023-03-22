import React from "react";

const PageNavigator = ({ page, setPage }) => {
  const handlePageChange = (sign) => {
    sign === "+" ? setPage((prev) => prev + 1) : setPage((prev) => prev - 1);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            disabled={page === 1}
            onClick={() => handlePageChange("-")}
            aria-label="Previous"
            style={{ cursor: "pointer" }}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        <li className="page-item">
          {page > 1 && (
            <button
              className="page-link"
              onClick={(e) => setPage((prev) => prev - 1)}
            >
              {page > 1 ? page - 1 : "."}
            </button>
          )}
        </li>
        <li className="page-item">
          <button className="page-link bg-secondary text-white">{page}</button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => setPage((prev) => prev + 1)}
          >
            {page + 1}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Next"
            onClick={() => handlePageChange("+")}
            style={{ cursor: "pointer" }}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigator;
