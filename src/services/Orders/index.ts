import { get } from '../../config/server/http'
import { useFetcher } from '../../hooks/useFetch'
import { SWRConfiguration } from 'swr'

interface IUseQueryGetOrder {
    id: string
    options: SWRConfiguration
}

export const useQueryGetOrder = ({ id, options }: IUseQueryGetOrder) => {
  return useFetcher(`/orders/${id}`, get, { ...options })
}
