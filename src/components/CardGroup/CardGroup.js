import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  const products = [
    { id: 1, name: "Laptop Pro", price: 1250000 },
    { id: 2, name: "Laptop Pro max", price: 1250000 },
    { id: 3, name: "Laptop Alta Pro", price: 1250000 },
  ];
  return (
    <div>
      <h2> this is My Cards</h2>

      <div className="card-group"></div>
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default CardGroup;
