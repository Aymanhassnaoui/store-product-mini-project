import React, { useState } from 'react'

function SerchForm({onSearch} ) {



  const [Searchinput, setSearchInput] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
   
    onSearch(Searchinput);
    console.log( Searchinput)
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };


  return (
  <form  >
   <div className="row g-3 align-items-center">
<div  className=' "col-auto'>
    

     </div>
     <div className='col-auto'>
     <input type="text" name="" id="search" className="form-control" placeholder=""   value={Searchinput} 
            onChange={handleInputChange}/>
     </div>
 
   <div className='col-auto'>
   <input  className='btn btn-primary' type="submit"  value="search"   onClick={handleSearch} />
   </div>
   </div>
   
   </form>  
   
  )
}

export default SerchForm