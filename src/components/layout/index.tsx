import React, { FC } from 'react'
import { Menu } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import { useNavigate } from 'react-router-dom'
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'

interface LayoutProps {
    children: JSX.Element
}

export const AppLayout: FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate()

  function onMenuClick (url: string) {
    navigate(url, { replace: true })
  }
  const menuItems = [{
    key: '/order',
    icon: <ShoppingCartOutlined />,
    label: 'Orders'
  }, {
    key: '/',
    icon: <HomeOutlined />,
    label: 'Home'
  }]
  return (
    <>
      <Header style={{ height: '8vh', backgroundColor: 'purple', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Menu onClick={(item) => onMenuClick(item.key)} style={{ width: '30vw', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px' }} items={menuItems} />
      </Header>
      <Content style={{ height: '84vh', backgroundColor: '#ffffffd8', padding: '15px' }}>
        {children}
      </Content>
      <Footer style={{ height: '6vh', backgroundColor: 'purple' }}>
      </Footer>
    </>
  )
}
