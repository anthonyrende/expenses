import React from 'react';

// Components
import Header from "./components/Header.js"
import { Balance } from "./components/Balance"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import { AddTransaction } from "./components/AddTransaction"

// Context
import { GlobalProvider } from "./context/GlobalState"

// Theme
import { ThemeProvider, createTheme, Arwes } from 'arwes';
// import './style/arwes/expensesMain.css'

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={createTheme()}>
      <Arwes animate background='./images/wallpaper.jpg' pattern='./images/glow.png'>
          
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </Arwes>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
