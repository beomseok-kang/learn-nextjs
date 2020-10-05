import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

export default function Index() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>{id}</h1>
      <p>Hello {id}!</p>
    </Layout>
  );
}
