import React from "react";

export default function Rating({ rating, total = 5 }) {
  return (
    <>
      <div className="d-flex align-items-center gap-1">
        {[...Array(5)].map((_, index) => {
          const star = index + 1;

          if (rating >= star) {
            return (
              <>
                <i className="bi bi-star-fill text-warning" key={index}></i>
              </>
            );
          }

          if (rating >= star - 0.5) {
            return (
              <>
                <i className="bi bi-star-half text-warning" key={index}></i>
              </>
            );
          }

          return (
            <>
              <i className="bi bi-star text-warning" key={index}></i>
            </>
          );
        })}

        <span className="ms-2 text-muted small">({rating})</span>
      </div>
    </>
  );
}
