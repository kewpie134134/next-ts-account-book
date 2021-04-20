import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { Date, MonthlyData } from '../../interfaces';
import { sampleDateData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import { db } from '../../utils/Firebase';

type Props = {
  item?: Date;
  errors?: string;
  monthlyData?: MonthlyData;
};

const StaticPropsDetail = ({ item, errors, monthlyData }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && (
        <ListDetail
          item={item}
          monthlyData={monthlyData}
          id={id}
          user="father"
        />
      )}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = sampleDateData.map((data) => ({
    params: { id: data.date }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const date = params?.id;
    const item = sampleDateData.find((data) => data.date === date);
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time

    const monthlyDataDoc = await db.collection(`father-${date}`).get();
    const monthlyData: Array<MonthlyData> = await monthlyDataDoc.docs.map(
      (doc) => {
        const monthlyDataDoc = doc.data();
        return {
          ...monthlyDataDoc
        };
      }
    );

    return { props: { item, monthlyData } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
