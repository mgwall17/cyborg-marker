import Link from "next/link";
import React from "react";
import Container from '@material-ui/core/Container'

export default function NewsList({ posts }) {
  return (
    <Container>
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h2>{post.Title}</h2>
                    <div>{post.User.username}</div>         
            </a>
            <h1>hello</h1>
          </Link>
        ))}
    </Container>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json()

  return {
    props: { posts },
  };
}
