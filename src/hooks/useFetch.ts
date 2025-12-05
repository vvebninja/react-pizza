import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

export const useFetch = <T>(url: string) => {
  return useSWR<T>(url, fetcher);
};
