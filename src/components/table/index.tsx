import { Table as AntTable } from 'antd'
import React from 'react'
import './style.css'

interface TableProps {
    data: object[]
    columns: object[]
}

export const Table = ({ data, columns }: TableProps) => {
  return <AntTable bordered pagination={false} className='table' style={{ width: '90vw' }} columns={columns} dataSource={data} />
}
