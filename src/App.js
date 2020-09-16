import React from 'react';
import Nav from "./components/Nav.js"
import { Balance } from "./components/Balance"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import { AddTransaction } from "./components/AddTransaction"

import { GlobalProvider } from "./context/GlobalState"

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
