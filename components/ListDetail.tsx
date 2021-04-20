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
  console.log(monthlyData);
  return (
    <div>
      <h1>Detail for {item.name}</h1>
      <p>Date: {item.date}</p>
      <Link href={`/${user}/${Number(path) - 1}`}>
        <a>先月</a>
      </Link>{' '}
      |{' '}
      <Link href={`/${user}/${Number(path) + 1}`}>
        <a>次月</a>
      </Link>
      <div>
        {monthlyData?.map((data: any) => {
          return <div>{data.item}</div>;
        })}
      </div>
    </div>
  );
};

export default ListDetail;
