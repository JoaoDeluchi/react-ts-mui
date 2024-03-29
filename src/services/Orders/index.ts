import { get } from '../../config/server/http'
import { useFetcher } from '../../hooks/useFetch'
import { IUseQuery } from '../../model/query'

export const useQueryGetOrder = ({ options }: IUseQuery) => {
  return useFetcher('/order', get, { ...options })
}
