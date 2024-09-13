import React from 'react'

function Product( {product }) {
  return (
    <>
    <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img    width={ 250} src= {product.image}    alt =""></img></td>
                <td>{product.rating.count} {product.rating.rate}</td>
              
            </tr>

    </>
  )
}

export default Product