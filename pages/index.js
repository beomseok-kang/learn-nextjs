import Link from "next/link";
import Layout from "../components/Layout";
import axios from "axios";

const Button = ({ onClick }) => (
  <button onClick={onClick}>Get Data From Server</button>
);

const Index = () => {
  const onClick = () => {
    axios.get("http://localhost:8000/getdata").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Layout>
      <h1>hello world</h1>
      <Link href="/hello">
        <a title="hello">Hello Page</a>
      </Link>
      <Link href="/users">
        <a title="users">Users Page</a>
      </Link>
      <Button onClick={onClick} />
    </Layout>
  );
};

export default Index;
