import React from "react";

const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
        ) : stars >= number ? (
          <i className="bi bi-star-half" style={{ color: "gold" }}></i>
        ) : (
          <i className="bi bi-star" style={{ color: "gold" }}></i>
        )}
      </span>
    );
  });
  return (
    <div
      // className="mx-3"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="icon-style">{ratingStar}</div>

      <span className="text-muted" style={{ fontSize: "12px" }}>
        50 reviews
      </span>
    </div>
  );
};

export default Star;
