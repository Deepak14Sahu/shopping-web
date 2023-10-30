import { useLocation } from "react-router-dom";
import "../CSS/ProductPage.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { AddWishlistClick, AddCartClick } from "./AddingFunction";
import { useState } from "react";

export default function ProductPage() {
  const location = useLocation();
  const data = location.state;
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  const wishlist = useSelector((state) => state.product.wishlist);

  const handleColor = () => {
    return wishlist.some((item) => item.id === data.id) ? "red" : "#5a5a5a";
  };

  return (
    <Card className="m-auto mt-3">
      <Row>
        <Col xs={1} style={{ alignSelf: "center" }}>
          {data.images.map((image, index) => (
            <Card.Img
              style={{ height: "fit-content", width: "100%", padding: "1%" }}
              src={image}
              key={index}
              onClick={() => setIndex(index)}
            />
          ))}
        </Col>
        <Col xs={4}>
          <Card.Img src={data.images[index]} />
        </Col>
        <Col xs={6}>
          <Card.Body>
            <Card.Title style={{ fontSize: "40px" }}>{data.name}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <span style={{ fontSize: "1rem", padding: "15px" }}>
              &#8377; {data.price}
            </span>
          </Card.Body>
          <Button
            variant="secondary"
            style={{ margin: "20px 20px" }}
            onClick={() => AddCartClick(dispatch, data)}
          >
            Add to Cart
          </Button>
        </Col>
        <Col xs={1}>
          <i
            className="fa fa-heart fa-2x"
            aria-hidden="true"
            onClick={() => AddWishlistClick(wishlist, dispatch, data)}
            style={{ color: handleColor() }}
          ></i>
        </Col>
      </Row>
    </Card>
  );
}
