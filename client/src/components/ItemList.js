import React from "react";
import { Card, Button } from "antd";
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  //update cart handler
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: 1 },
    });
  };

  const { Meta } = Card;
  return (
    <div>
      <Card
        style={{ width: 240, margin: 20 }}
        cover={<img alt={item.name} src={item.image} style={{ height: 240 }} />}
      >
        <Meta title={item.name} description={item.price} />
        <div className="item-button">
          <Button onClick={() => handleAddToCart()}>Add to cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemList;
