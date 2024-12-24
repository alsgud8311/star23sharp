import { getMessageList } from "@/api/message.api";
import { messageKeys } from "@/components/messages/queries";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

export default function useMessageList() {
  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
    queryKey: messageKeys.lists(),
    queryFn: ({ pageParam = 0 }) => getMessageList(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
    retry: 0,
    select: (data) => (data.pages ?? []).flatMap((page) => page.messages),
  });
  return {
    data,
    fetchNextPage,
    hasNextPage,
  };
}
