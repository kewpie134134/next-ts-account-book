import * as React from "react";
import DateListItem from "./DateListItem";
import { SampleDate } from "../../interfaces";

type Props = {
  items: SampleDate[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.date}>
        <DateListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
