import React from 'react';

export default function Header() {
  return (
    <header 
      className="text-light w-100 d-flex align-items-center px-3 shadow fw-bold"
      style={{
        height: "70px",
        border: "1px solid black",
        background: "#3F51B5",
      }}
    >
      {/* Restaurant Name with Icon */}
      <h4 className="m-0">
        <i className="fa-solid fa-utensils me-2"></i> Food's Restaurant
      </h4> 
      
      {/* Cart Icon (Aligned to the Right) */}
      <div className="ms-auto me-3">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  );
}
