import React from 'react';

// Components
import Nav from "./components/Nav.js"
import { Balance } from "./components/Balance"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import { AddTransaction } from "./components/AddTransaction"

// Context
import { GlobalProvider } from "./context/GlobalState"
import 'rsuite/dist/styles/rsuite-dark.css'
import 'rsuite/dist/styles/rsuite-default.css'
function App() {
  return (
    <GlobalProvider>
          <Nav />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
