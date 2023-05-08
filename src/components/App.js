import React, {useEffect, useState} from "react";
import TransactionList from './TransactionList'
import Banner from './Banner'
import Search from "./Search";
import AddTransaction from "./AddTransaction";
import './Style.css'
function App() {
  const [transactions, setTransactions] = useState ([])
  useEffect(() => {
    fetch ("http://localhost:8001/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data));
  }, []);
  
  function searchTransaction (searchInput){
  const filteredSearch = transactions.filter(item => item.description.toLowerCase().includes(searchInput.toLowerCase()))
      setTransactions(filteredSearch);
    
  }
  function handlesubmission (props){
    fetch("http://localhost:8001/transactions",{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(props)
          }).then(res => res.json())
          .then(item=> setTransactions([...transactions, item]))
  }
  return (
    <>
    <Banner />
    <Search fn = {searchTransaction}/>
    <AddTransaction callBackFn={handlesubmission}/>
    <TransactionList transactions={transactions} />
    </>
  );
}

export default App;
