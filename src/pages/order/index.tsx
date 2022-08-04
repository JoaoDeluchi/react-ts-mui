import React from 'react'
import { AppLayout } from '../../components/layout'
import { Table } from '../../components/table'
import { useQueryGetOrder } from '../../services/Orders'

const Order = () => {
  const { data } = useQueryGetOrder({})
  console.log(data)
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }
  ]
  return (
    <AppLayout>
      <Table columns={columns} data={[data]} />
    </AppLayout>
  )
}

export default Order
