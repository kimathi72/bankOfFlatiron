import React, {useEffect, useState} from "react";
import TransactionItem from './TransactionItem';

function TransactionList ({transactions}){
//     const [transactions, setTransactions] = useState ([])
//   useEffect(() => {
//     fetch ("http://localhost:8001/transactions")
//     .then(res => res.json())
//     .then(data => setTransactions(data));
//   }, []);
  
    return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>

            {transactions.map(transaction => {
                return <TransactionItem key={transaction.id} transaction= {transaction}/>
            })}

            </tbody>
            
        </table>
    )

}

export default TransactionList ;