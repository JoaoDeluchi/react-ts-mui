import { useSWRConfig } from 'swr'

export const verifyCache = (key: string) => {
  const { cache } = useSWRConfig()
  if (cache.get(key)) {
    return true
  } else {
    return false
  }
}
