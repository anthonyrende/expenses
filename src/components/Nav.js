import React, { useState } from 'react'
import {Nav, Navbar, Button, Dropdown, Icon} from 'rsuite'

const styles = {
    marginBottom: 50
  };
  
// const CustomNav = ({ active, onSelect, ...props }) => {
//     return (
//       <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
//         <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
//           Home
//         </Nav.Item>
//         <Nav.Item eventKey="news">News</Nav.Item>
//         <Nav.Item eventKey="solutions">Solutions</Nav.Item>
//         <Nav.Item eventKey="products">Products</Nav.Item>
//         <Nav.Item eventKey="about">About</Nav.Item>
//       </Nav>
//     );
//   };
const Header = ({ seclect, onSelect, ...props }) => {
    const [active, setActive] = useState(false)
    console.log(active)

    function handleSelect() {
        // this.setState({ active: activeKey });
        setActive(!active)
      }

    return (
        <div>
        <Navbar.Header>
            <a href="#" className="navbar-brand logo">Expenses</a>
        </Navbar.Header>
        <Nav appearance="tabs" reversed justified activeKey={active}  onSelect={onSelect} >
          <Nav.Item     icon={<Icon icon="home" />}  >Home </Nav.Item>
          <Nav.Item>Calculator</Nav.Item>
          <Nav.Item >News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Nav.Item>About</Nav.Item>
        </Nav>
      </div>
    
    )
}

export default Header
