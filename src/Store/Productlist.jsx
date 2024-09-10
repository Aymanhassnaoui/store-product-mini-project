import React, { useEffect } from 'react'

function Productlist() {


    const getProductS = ()  => {
        fetch('https://fakestoreapi.com/products/')
        .then(response => response.json())
        .then(response => (console.log(response)));
    }
 
    useEffect(() => {
       
    
       
        getProductS ()
        
       
      }, []);

  return ( 
    <div className='container'>
    <h1>liste des produit </h1>
    <table class="table">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>description</th>
                <th>image</th>
                <th>rating</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              
            </tr>
        
        </tbody>
    </table>

</div>
  )

}

export default Productlist