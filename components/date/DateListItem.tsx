import React from 'react';
import Link from 'next/link';

import { SampleDate } from '../../interfaces';

type Props = {
  data: SampleDate;
};

const ListItem = ({ data }: Props) => (
  <Link href="/account-book/[id]" as={`/account-book/${data.date}`}>
    <a>{data.date}</a>
  </Link>
);

export default ListItem;
