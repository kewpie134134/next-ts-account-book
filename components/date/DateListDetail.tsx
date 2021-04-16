import * as React from 'react';

import { SampleDate } from '../../interfaces';

type ListDetailProps = {
  item: SampleDate;
};

const ListDetail = ({ item: sampleDate }: ListDetailProps) => (
  <div>
    <h1>Detail for {sampleDate.date}</h1>
  </div>
);

export default ListDetail;
