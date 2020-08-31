import React from 'react';
import Header from "./components/Header.js"
import { Balance } from "./components/Balance"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import { AddTransaction } from "./components/AddTransaction"

import { GlobalProvider } from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
    <Header />
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
