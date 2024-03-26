import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useRef } from "react";

const MAX_POST_PAGE = 10;

interface TodoType {
  id: number;
  title: string;
}

const fetchTodos = async ({ pageParam }: { pageParam: number }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=${MAX_POST_PAGE}`,
  );

  const todos = (await response.json()) as TodoType[];
  return todos;
};

export const Todo = () => {
  const observer = useRef<IntersectionObserver>();

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["todos"],
      queryFn: ({ pageParam }) => fetchTodos({ pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    });

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }

        if (node) observer.current?.observe(node);
      });
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading],
  );

  const todos = useMemo(() => {
    return data?.pages.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);
  }, [data]);

  if (isLoading) return <h1>Carregando mais dados</h1>;
  return (
    <div>
      {todos &&
        todos.map((item) => {
          return (
            <div key={item.id} ref={lastElementRef}>
              {item.title}
            </div>
          );
        })}
    </div>
  );
};
