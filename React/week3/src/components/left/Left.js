import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import 'antd/dist/antd.css'
import './left.css'
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Left extends Component {
  // handleClick = (e) => {
  //   console.log('click ', e);
  // }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className="left"
      >
        <SubMenu key="sub1" title={<Link to="/consoles"><span><Icon type="laptop" /><span>控制台</span></span></Link>}></SubMenu>
        <SubMenu key="sub2" title={<Link to="/unused"><span><Icon type="setting" /><span>限制管理</span></span></Link>}></SubMenu>
        <SubMenu key="sub4" title={<Link to="/purchase/prepurchase"><span><Icon type="appstore-o" /><span>采购管理</span></span></Link>}>
             <Menu.Item key="1"><Link to="/purchase/prepurchase"><Icon type="tag" />预购管理</Link></Menu.Item>
             <Menu.Item key="2"><Link to="/purchase/appointment"><Icon type="tag" />预约验看管理</Link></Menu.Item>
             <Menu.Item key="3"><Link to="/purchase/substitute"><Icon type="tag" />代购委托管理</Link></Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
export default Left