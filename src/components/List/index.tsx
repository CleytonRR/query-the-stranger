import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Post } from "../../types/Post";

const MAX_POST_PAGE = 10;

const fetchPost = async (pageNumber: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${MAX_POST_PAGE}&_page=${pageNumber}`,
  );

  const posts = (await response.json()) as Post[];
  return posts;
};

export const ListPosts = () => {
  const [pageNumber, setPageNumber] = useState(0);
  console.log(`renderizei ${pageNumber}`);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (pageNumber < MAX_POST_PAGE) {
      const nextPage = pageNumber + 1;
      queryClient.prefetchQuery({
        queryKey: ["posts", nextPage],
        queryFn: async () => await fetchPost(nextPage),
      });
    }
  }, [pageNumber, queryClient]);

  const { data: posts } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: async () => await fetchPost(pageNumber),
    placeholderData: keepPreviousData,
  });

  return (
    <main>
      <ul>
        {posts &&
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
      </ul>

      <div className="flex gap-3 mt-2">
        <button
          disabled={pageNumber === 0}
          onClick={() => setPageNumber((prev) => prev - 1)}
          className="bg-green-500 p-3 rounded-sm shadow-sm"
        >
          Página Anterior
        </button>
        <button
          className="bg-green-800 p-3 rounded-sm shadow-sm"
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          Próxima Página
        </button>
      </div>
    </main>
  );
};
