import React from 'react';
import { Card, Button } from 'antd';

const ItemList = ({item}) => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        style={{ width: 240, margin: 20 }}
        cover={<img alt={item.name} src={item.image} style={{ height: 240 }} />}
      >
        <Meta title={item.name} description={item.price} />
        <div className="item-button">
            <Button>Add to cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemList;