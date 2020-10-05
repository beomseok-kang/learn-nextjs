import Layout from "../../components/Layout";
import axios from "axios";
import Link from "next/link";

const Users = ({ users }) => (
  <Layout>
    <h1>Users page</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>
              {user.name}: {user.email}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Users.getInitialProps = async () => {
  const { data: users } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("data loaded");
  return { users };
};

export default Users;
