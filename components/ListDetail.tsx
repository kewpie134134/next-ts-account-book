import * as React from 'react';
import Link from 'next/link';

import { User, MonthlyData } from '../interfaces';

type ListDetailProps = {
  item: User;
  id: string | string[];
  user: string;
  monthlyData?: MonthlyData;
};

const ListDetail = ({ item, id: path, user, monthlyData }: ListDetailProps) => {
  console.log(monthlyData);
  return (
    <div>
      <h1>Detail for {item.name}</h1>
      <p>ID: {item.id}</p>
      <Link href={`/${user}/${Number(path) - 1}`}>
        <a>先月</a>
      </Link>{' '}
      |{' '}
      <Link href={`/${user}/${Number(path) + 1}`}>
        <a>次月</a>
      </Link>
    </div>
  );
};

export default ListDetail;
