 
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import{ TransactionList} from './components/TransactionList'
import AddTransactionForm from './components/AddTransactionForm'
import {GlobalProvider } from './context/GolbalState'
function App() {
  return (
    <GlobalProvider  >
    <Header/>
    
    <div>
<Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransactionForm/>
    </div>
    
    </GlobalProvider>
  );
}

export default App;
