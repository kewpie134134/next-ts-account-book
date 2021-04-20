import React from 'react';
import Link from 'next/link';

import { Date } from '../interfaces';

type Props = {
  data: Date;
};

const ListItem = ({ data }: Props) => (
  <Link href="/mother/[id]" as={`/mother/${data.date}`}>
    <a>
      {data.date}: {data.name}
    </a>
  </Link>
);

export default ListItem;
