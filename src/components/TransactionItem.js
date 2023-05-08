 import React from "react";
function TransactionItem({transaction}){
  
    
    return (
        <tr>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            
        </tr>
    )
} 
export default TransactionItem;