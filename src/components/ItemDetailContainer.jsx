import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";

import data from "../data/products.json"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
        const filteredData = data.find((d) => d.id === Number(id));
        setProduct(filteredData);
    });
  }, [id]);

  if(!product) return null;

  return (
    <Container className="mt-4">
      <div>{product.title}</div>
      <img src={product.pictureUrl} alt={product.name} />
    </Container>
  );
};
