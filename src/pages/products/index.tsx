import { Empty } from 'antd'
import React from 'react'
import { AppLayout } from '../../components/layout'
import { Table } from '../../components/table'
import { useQueryGetProducts } from '../../services/Products'

const Products = () => {
  const { data, isLoading, error } = useQueryGetProducts({})

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      rowKey: 'Id'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      rowKey: 'price'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      rowKey: 'description'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      rowKey: 'category'
    }
  ]

  if (isLoading) {
    return <div>isLoading....</div>
  }

  if (error) {
    return <Empty />
  }

  return (
    <AppLayout>
      <Table columns={columns} data={data?.data} />
    </AppLayout>
  )
}

export default Products
