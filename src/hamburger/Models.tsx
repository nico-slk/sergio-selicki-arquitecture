import { Outlet, useLoaderData } from 'react-router-dom';
import '../css/main.css';
import { Epic } from './Epic';

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

  return (
    <div className='main'>
      <h1>Models</h1>
      <Epic message={`Hola esto es un mensaje en el head de Models`} />
      <Outlet />
      {posts.map((post: Posts): JSX.Element => <div key={post.id} >
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
