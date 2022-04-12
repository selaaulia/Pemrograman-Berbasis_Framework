import React, { useEffect, useState } from "react";
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
    const [products, setProducts] = useState({});
  
    const getProductDetail = () => {
      fetch(`http://localhost:3001/setrika/${params.id}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setProducts(json);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getProductDetail();
    });
    console.log(params.id);
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={'/image/' + products.images[0].img} />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Type>{products.type}</Card.Type>
        <Card.Price>{products.price}</Card.Price>
        <Card.Text>{products.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Stock: {products.stock}</ListGroupItem>
        <ListGroupItem>Aksesoris: {products.aksesoris}</ListGroupItem>
        <ListGroupItem>Lapisan Alas: {products.lapisan_alas}</ListGroupItem>
        <ListGroupItem>Size: {products.size}</ListGroupItem>
        <ListGroupItem>Daya: {products.daya}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button>Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetailPage;
