import { GetStaticProps } from "next";
import Link from "next/link";

import { SampleDate } from "../../interfaces";
import { sampleDateData } from "../../utils/sample-date-data";
import Layout from "../../components/Layout";
import DateList from "../../components/DateList";

type Props = {
  items: SampleDate[];
};

const WithStaticProps = ({ items }: Props) => (
  // items という props は getStaticProps から渡されたオブジェクトの配列が格納されている
  <Layout title="Account book | Next.js + TypeScript Example">
    <h1>Account Book</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /account-book</p>
    <DateList items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: SampleDate[] = sampleDateData;
  // props には items というオブジェクトの配列を渡す
  return { props: { items } };
};

export default WithStaticProps;
