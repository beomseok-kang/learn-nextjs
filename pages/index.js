import Link from "next/link";
import Layout from "../components/Layout";

const index = () => (
  <Layout>
    <h1>hello world</h1>
    <Link href="/hello">
      <a title="hello">Hello Page</a>
    </Link>
  </Layout>
);

export default index;
