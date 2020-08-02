import React from "react";
import { List } from "antd";

const article = ({ articles }) => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={articles}
    renderItem={item => (
      <List.Item
        key={item.title}
        extra={<img width={272} alt="logo" src={item.urlToImage} />}
      >
        <List.Item.Meta
          title={<a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>}
          description={item.description}
        />
        {item.content}
        <h4> Autor: {item.author || "anonimous"} </h4>
      </List.Item>
    )}
  />
);
export default article;
