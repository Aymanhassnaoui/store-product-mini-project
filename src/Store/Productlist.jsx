import React, { useEffect, useState } from 'react'
import Product from './product';
import SerchForm from './serch';

function Productlist() {


    const [productList, setProduct] = useState([]);
    const [searchinput, setsearchinput] = useState([]);


    const displayProductS = ()  => {

        if (productList.length > 0) {
            const productsTemp = productList.filter( product => {
          
            return product.title.includes(searchinput) || product.id.toString().includes(searchinput)  || product.description.includes(searchinput) } )
    
        
        return productsTemp.map((product, key) => {
            return <Product product={product} key={key} />
            })
        }
        return  <tr>

            <td> no  product</td>
        </tr>
        }

    const getProductS = ()  => {
        fetch('https://fakestoreapi.com/products/')
        .then(response => response.json())
        .then(response => setProduct(  response));
    }
 
    useEffect(() => {
       
      getProductS ()
          }, []);


          const handleSearch = (value) => {
            setsearchinput(value);
          };

  return ( 
    
    <div className='container'>
      
        <SerchForm  onSearch={handleSearch}  />
    <h1>liste des produit </h1>
    <table className="table">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>description</th>
                <th>category</th>
                <th>image</th>
                <th>rating</th>
            </tr>
        </thead>
        <tbody>
           {displayProductS()}
        
        </tbody>
    </table>
    
</div>
  );

}

export default Productlist