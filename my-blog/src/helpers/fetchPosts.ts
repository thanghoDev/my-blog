import { BLOG } from 'constants/blog';

type fetchPostsProps = {
  page?: string;
  order?: string;
  limit?: string;
  sortBy?: string;
  search?: string;
};

async function fetchPosts(queryObj: fetchPostsProps) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_DEVELOPMENT}/${BLOG}?${new URLSearchParams(
      queryObj
    ).toString()}`
  );
  return await data.json();
}

export { fetchPosts };
