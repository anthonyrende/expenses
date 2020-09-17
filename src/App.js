import React from 'react';

// Components
import Nav from "./components/Nav.js"
import { Balance } from "./components/Balance"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import { AddTransaction } from "./components/AddTransaction"

// Context
import { GlobalProvider } from "./context/GlobalState"

//Styling
import { Content, FlexboxGrid, Panel } from 'rsuite'
// import 'rsuite/dist/styles/rsuite-dark.css'
import 'rsuite/dist/styles/rsuite-default.css'
function App() {
  return (
    <GlobalProvider>
    <Nav />
      <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12} md={6}>
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </GlobalProvider>
  );
}

export default App;
