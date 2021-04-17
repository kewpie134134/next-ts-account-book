import * as React from 'react';
import Link from 'next/link';

import { User } from '../interfaces';

type ListDetailProps = {
  item: User;
  id: string | string[];
  user: string;
};

const ListDetail = ({ item, id: path, user }: ListDetailProps) => {
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
