import React from "react";

const Product = ({ product, handleData }) => {
  return (
    <div>
      <img
        src={product.image}
        width="200px"
        height="200px"
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
      <button onClick={() => handleData(product.name, product.price)}>
        More Details
      </button>
    </div>
  );
};

export default Product;
Product.defaultProps = {
  product: {
    image:
      "https://www.ormondbeachmartialarts.com/wp-content/uploads/2017/04/default-image.jpg",
    name: "inconnu",
    price: "0",
  },
};
