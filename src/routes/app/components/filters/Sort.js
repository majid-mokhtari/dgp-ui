import React from "react";
import { Select } from "antd";

const Option = Select.Option;

export default function Sort() {
  return (
    <Select defaultValue="alphabetical" className="sort">
      <Option value="alphabetical">Alphabetical</Option>
      <Option value="rating">Highest Rating</Option>
      <Option value="popularity">Most Popular</Option>
    </Select>
  );
}
