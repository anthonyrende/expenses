import React from 'react'
import {Nav, Button, Dropdown, Icon} from 'rsuite'
// import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-default.css'
const Header = () => {
    return (
        <div>
        <Nav appearance="subtle" justified>
          <Nav.Item active icon={<Icon icon="home" />}  >Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Solutions</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Nav.Item>About</Nav.Item>
        </Nav>
        <Button>Hello World</Button>
      </div>
    )
}

export default Header
