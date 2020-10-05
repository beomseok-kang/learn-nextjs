import Link from "next/link";
import Layout from "../components/Layout";

const UserLink = ({ id }) => (
  <li>
    <Link href="/user/[id]" as={`/user/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

const UserCommentLink = ({ id, comment }) => (
  <li>
    <Link href="/user/[id]/[comment]" as={`/user/${id}/${comment}`}>
      <a>
        {id}, {comment}
      </a>
    </Link>
  </li>
);

const hello = () => (
  <Layout>
    <ul>
      <UserLink id="Beom Seok" />
      <UserLink id="Ben" />
      <UserLink id="BUUM" />
      <UserCommentLink id="Beom Seok" comment="hello world!" />
    </ul>
  </Layout>
);

export default hello;
