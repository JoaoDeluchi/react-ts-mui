import useSWR, { Fetcher, SWRResponse } from 'swr'
import { verifyCache } from '../../utils/swr'

interface Response extends SWRResponse {
  isLoading: boolean
}

export const useFetcher = (key: string, request: Fetcher, options = {}) : Response => {
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
    mutate,
    isValidating
  }
}
