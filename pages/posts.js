export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();

    return {
      props: { posts },
    };
  } catch (error) {
    console.log("Failed to fetch posts: ", error);
    return {
      props: { posts: [] },
    };
  }
}

export default function PostPage(props) {
  return (
    <div className="container" >
      <h1>Blog Posts</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>
              {new Date(post.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}