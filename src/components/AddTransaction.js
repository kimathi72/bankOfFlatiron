import React, { useState } from "react";

function AddTransaction ({callBackFn}){
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category:"",
        amount:""
    })
    function handleSubmit(){
        console.log(formData)
        callBackFn(formData)
    }
    return(
        <form onSubmit={(e)=>{e.preventDefault(); return handleSubmit()}}>
            <div id="addTransactionDiv" className="form-group">
                <label>Date</label>
                <input type="date" placeholder="01/01/2020" value={formData.date} onChange={(e)=> setFormData({... formData, date: e.target.value})}/>
                <input type="text" placeholder="Description" value={formData.description} onChange={(e)=> setFormData({... formData, description: e.target.value})}/>
                <input type="text" placeholder="Category" value={formData.category} onChange={(e)=> setFormData({... formData, category: e.target.value})}/>
                <input type="number" placeholder="0.00" value={formData.amount} onChange={(e)=> setFormData({... formData, amount: e.target.value})}/>
           </div>
           <input type="submit" className="btn btn-primary" value={"Add Transaction"}/>
        </form>
    )
}
export default AddTransaction;