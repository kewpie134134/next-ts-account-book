import * as React from 'react';
import Link from 'next/link';

import { User } from '../interfaces';

type ListDetailProps = {
  item: User;
  id: string | string[];
};

const ListDetail = ({ item: user, id: path }: ListDetailProps) => {
  return (
    <div>
      <h1>Detail for {user.name}</h1>
      <p>ID: {user.id}</p>
      <Link href={`/father/${Number(path) - 1}`}>
        <a>先月</a>
      </Link>{' '}
      |{' '}
      <Link href={`/father/${Number(path) + 1}`}>
        <a>次月</a>
      </Link>
    </div>
  );
};

export default ListDetail;
