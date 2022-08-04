import { get } from '../../config/server/http'
import { useFetcher } from '../../hooks/useFetch'
import { IUseQuery } from '../../model/query'

export const useQueryGetProducts = ({ options }: IUseQuery) => {
  return useFetcher('/products', get, { ...options })
}
