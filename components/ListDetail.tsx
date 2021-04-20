import * as React from 'react';
import Link from 'next/link';

import { Date, MonthlyData } from '../interfaces';

type ListDetailProps = {
  item: Date;
  id: string | string[];
  user: string;
  monthlyData?: MonthlyData;
};

const ListDetail = ({ item, id: path, user, monthlyData }: ListDetailProps) => {
  const stringInsert = (
    string: string,
    index: number,
    value: string
  ): string => {
    const result = string.slice(0, index) + value + string.slice(index);
    return result;
  };

  const pathToAnotherMonth = (
    path: string | string[],
    index: number
  ): string => {
    let thisYearMonthForNumber: number = NaN;
    if (typeof path === 'string')
      // path => '2021-04'
      thisYearMonthForNumber = Number(path.slice(0, 4) + path.slice(5));
    const anotherMonthForString = (thisYearMonthForNumber + index).toString();
    return stringInsert(anotherMonthForString, 4, '-');
  };

  return (
    <div>
      <h1>Detail for {item.name}</h1>
      <p>Date: {item.date}</p>
      <Link href={`/${user}/${pathToAnotherMonth(path, -1)}`}>
        <a>先月</a>
      </Link>{' '}
      |{' '}
      <Link href={`/${user}/${pathToAnotherMonth(path, 1)}`}>
        <a>次月</a>
      </Link>
      <div>
        {monthlyData?.map((data: any, index: number) => {
          return <div key={index}>{data.item}</div>;
        })}
      </div>
    </div>
  );
};

export default ListDetail;
