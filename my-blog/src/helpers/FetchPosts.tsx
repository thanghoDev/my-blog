type fetchPostsProps = {
  page?: string;
  order?: string;
  limit?: string;
  sortBy?: string;
  search?: string;
};

async function FetchPosts(queryObj: fetchPostsProps) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_DEVELOPMENT_BLOG}?${new URLSearchParams(
      queryObj
    ).toString()}`
  );
  return await data.json();
}

export { FetchPosts };
