import { useQuery, QueryFunction } from '@tanstack/react-query';
import axios from 'axios';

/**
 * Fetches the reddit front page
 * @returns
 */
export const useFetchFrontPage = () => {
  return useQuery({
    queryKey: ['frontPage'],
    queryFn: fetchFrontPage,
  });
};

const fetchFrontPage: QueryFunction<any> = async () => {
  const { data } = await axios.get('https://oauth.reddit.com/.json');
  console.log(data);
  return data;
};
