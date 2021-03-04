import Link from "next/Link";
import Head from "next/Head";
import Image from "next/Image";
import Layout from "../../components/Layout/Layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>first post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image src="/images/profile.jpg" height="144" width="144" alt="My logo" />
    </Layout>
  );
};

export default FirstPost;
