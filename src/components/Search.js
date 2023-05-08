import React, {useState} from "react";

function Search ({fn}) {
    const [searchItem,setSearchItem] = useState("")
    function handleSearch (e){
        console.log(e.target.value)
        setSearchItem(e.target.value);
        fn(e.target.value)
    }
    return(
        <div id="searchForm" className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input id="searchbox" className="form-control" type="text" placeholder="Enter search here" onChange={handleSearch}/>
      </div> 
    )
}
export default Search;