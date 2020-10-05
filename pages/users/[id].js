import Layout from "../../components/Layout";
import axios from "axios";

const User = ({ user }) => (
  <Layout>
    <h1>{user.name}</h1>
    <p>username: {user.username}</p>
    <p>email: {user.email}</p>
    <p>website: {user.website}</p>
  </Layout>
);

User.getInitialProps = async (context) => {
  const { id } = context.query;
  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  console.log("fetched!");
  return { user };
};

export default User;
