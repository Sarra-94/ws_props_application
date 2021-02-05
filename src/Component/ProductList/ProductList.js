import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";
const ProductList = () => {
  let products = [
    {
      image:
        "https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364",
      name: "Golf",
      price: "99999999$",
    },
    {
      image:
        "https://static01.nyt.com/images/2020/03/05/multimedia/05sp-EUROPEAN-INYT1/05sp-EUROPEAN-INYT1-mediumSquareAt3X-v3.jpg",
      name: "Hammer",
      price: "123456$",
    },
    {
      image:
        "https://i.insider.com/578e9e4588e4a77c708b8db1?width=1100&format=jpeg&auto=webp",
      name: "Polo",
      price: "123455$",
    },
    {
      image:
        "https://www.jamesedition.com/stories/wp-content/uploads/2018/02/8f35ba26fe296e36b3a96ee5416259b4.jpg",
      name: "Ferrari",
      price: "777777777$",
    },
  ];
  const handleData = (name, price) => {
    alert(`this Car has the name ${name} and its price is ${price}`);
  };

  return (
    <div>
      <h2>this is our Products</h2>
      <div className="products">
        {products.map((product, i) => (
          <Product product={product} key={i} handleData={handleData} />
        ))}
      </div>
      <hr />
      <h2>this products are too expensive attention !!</h2>
      <div className="products">
        {products
          .filter((product) => Number(product.price.replace("$", "")) > 123456)
          .map((product, i) => (
            <Product product={product} key={i} handleData={handleData} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
