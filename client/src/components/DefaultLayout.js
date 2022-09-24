import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    CopyOutlined,
    UnorderedListOutlined,
    UserOutlined,
    LogoutOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/DefaultLayout.css';
const { Header, Sider, Content } = Layout;
  
const DefaultLayout = ({children}) => {
    const {cartItems} = useSelector(state => state.rootReducer);
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h3 className="text-center text-light font-weight-bold mt-3">POS</h3>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={window.location.pathname}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/bills" icon={<CopyOutlined />}>
              <Link to="/bills">Bills</Link>
            </Menu.Item>
            <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
              <Link to="/items">Items</Link>
            </Menu.Item>
            <Menu.Item key="/customers" icon={<UserOutlined />}>
              <Link to="/customers">Customers</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <h2 className="text-center font-weight-bold mt-3">Heaven's Kitchen</h2>
            <div className="cart-item d-flex justify-content-space-between flex-row">
              <p>{cartItems.length}</p>
              <ShoppingCartOutlined />
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
};
  
export default DefaultLayout;