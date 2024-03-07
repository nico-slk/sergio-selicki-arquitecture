import { useLoaderData } from 'react-router-dom';

interface PostList {
  posts: Posts[];
}

interface Posts {
  category: string;
  content: string;
  id: number;
  image: string;
  publishedAt: string;
  slug: string;
  status: string;
  thumbnail: string;
  title: string;
  updatedAt: string;
  url: string;
  userId: number;
}

export const Models = () => {

  const { posts } = useLoaderData() as PostList;
  console.log(posts);

  return (
    <div>
      <p>Models</p>
      {posts.map((post: Posts): JSX.Element => <div >
        {post.id}
      </div>)}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loaderPosts = async (): Promise<{
  posts: PostList;
}> => {
  const res = await fetch('https://jsonplaceholder.org/posts');
  const posts = await res.json();
  return { posts };
};
