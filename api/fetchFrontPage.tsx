import { FrontPageResponse } from '@/types/Listing';
import {
  useQuery,
  QueryFunction,
  useInfiniteQuery,
  QueryFunctionContext,
} from '@tanstack/react-query';
import axios from 'axios';

/**
 * Fetches the reddit front page with pagination
 * @returns
 */
export const useFetchFrontPage = () => {
  return useInfiniteQuery<FrontPageResponse>({
    queryKey: ['frontPage'],
    queryFn: fetchFrontPage,
    getNextPageParam: (lastPage) => lastPage.data.after || undefined,
    initialPageParam: '',
  });
};

const fetchFrontPage = async ({ pageParam = '' }: QueryFunctionContext) => {
  const { data } = await axios.get<FrontPageResponse>(
    `https://oauth.reddit.com/.json?after=${pageParam}`
  );
  console.log(data);
  return data;
};
