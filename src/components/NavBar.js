import React, { useState } from 'react'
import { BrowserRouter as Router, 
  NavLink, 
  Link, 
  Switch,
  Route,
  useRouteMatch,
  useParams } from 'react-router-dom'
import {Nav, Navbar, Button, Dropdown, Icon} from 'rsuite'
import { Balance } from './Balance'
import { IncomeExpenses } from './IncomeExpenses'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'

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
export const NavBar = ({ seclect, onSelect, ...props }) => {
    const [active, setActive] = useState(false)
    console.log(active)

    function handleSelect() {
        // this.setState({ active: activeKey });
        setActive(!active)
      }
      // <Nav.Item >News</Nav.Item>
      // <Nav.Item>Products</Nav.Item>
      const MyLink = React.forwardRef((props, ref) => {
        const { href, as, ...rest } = props;
        return (
          <Link href={href} as={as}>
            <a ref={ref} {...rest} />
          </Link>
        );
      });

      const NavLink = props => <Nav.Item componentClass={MyLink} {...props} />
    return (
        <Router>
        <Navbar.Header>
            <a href="#">Expenses</a>
        </Navbar.Header>
        <Nav appearance="tabs" reversed justified activeKey={active}  onSelect={onSelect} >
          <Link  href="/home"  icon={<Icon icon="home" />}>Home </Link>
          <Link href="/expenses">Expense Calculator</Link>
          <NavLink href="/fba">FBA Calculator</NavLink>
          <NavLink >Report</NavLink>
          <NavLink>Sign in</NavLink>
          <NavLink>About</NavLink>
        </Nav>
      </Router>
    
    )
}
export const Main = () => (
  <Switch>
    <Route path="/expenses">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </Route>
  </Switch>
);
