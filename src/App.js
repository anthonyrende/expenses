import React from 'react';
import Header from "./components/Header.js"
import { Balance } from "./components/Balance"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import { AddTransaction } from "./components/AddTransaction"

function App() {
  return (
    <div className="App">
    <Header />
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
    </div>
  );
}

export default App;
