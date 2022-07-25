import useSWR, { Fetcher } from 'swr'
import { verifyCache } from '../../utils/swr'

export const useFetcher = (key: string, request: Fetcher, options = {}) => {
  const { data, error, isValidating, mutate } = useSWR(key, (url: string, params: object) => request(url, { ...params }), {
    revalidateOnFocus: false,
    revalidateOnMount: !verifyCache(key),
    ...options
  })
  const isLoading = (!data && !error) || isValidating

  return {
    isLoading,
    data,
    error,
    isValidating,
    mutate
  }
}
