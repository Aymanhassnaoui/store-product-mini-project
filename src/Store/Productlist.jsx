import React, { useEffect, useState } from 'react'
import Product from './product';
import SerchForm from './serch';

function Productlist() {


    const [productList, setProduct] = useState([]);
    
    const [searchinput, setsearchinput] = useState([]);
    const [Categories, setCategories] = useState([]);


 

    const displayProductS = ()  => {

        if (productList.length > 0) {
            const productsTemp = productList.filter( product => {
          
            return product.title.includes(searchinput) || product.id.toString().includes(searchinput)   } )
    
        
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


    const getCategories = ()  => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(response => setCategories(  response));
     
    }

 
    useEffect(() => {
     getCategories();
      getProductS ()
          }, []);


          const handleSearch = (value) => {
            setsearchinput(value);
          };

  return ( 
    
    <div className='container'>
      
        <SerchForm  onSearch={handleSearch}  />
        <div className="container text-center  mt-5  mb-2 bg-secondary rounded">
  <div className="row">
  {Categories.map(Categorie => (
               <button className="col">  {Categorie} 
               </button>
              
            ))}
  </div>
</div>

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