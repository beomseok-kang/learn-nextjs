import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

const Comment = () => {
  const { id, comment } = useRouter().query;

  return (
    <Layout>
      <h1>User: {id}</h1>
      <p>comment: {comment}</p>
    </Layout>
  );
};

export default Comment;
