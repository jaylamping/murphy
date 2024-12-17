import { FrontPageResponse } from '@/types/Listing';
import { useQuery, QueryFunction } from '@tanstack/react-query';
import axios from 'axios';

/**
 * Fetches the reddit front page
 * @returns
 */
export const useFetchFrontPage = () => {
  return useQuery<FrontPageResponse>({
    queryKey: ['frontPage'],
    queryFn: fetchFrontPage,
  });
};

const fetchFrontPage: QueryFunction<FrontPageResponse> = async () => {
  const { data } = await axios.get<FrontPageResponse>(
    'https://oauth.reddit.com/.json'
  );
  console.log(data);
  return data;
};
