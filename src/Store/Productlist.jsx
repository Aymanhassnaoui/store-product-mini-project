import React, { useEffect, useState } from 'react';
import Product from './product';
import SerchForm from './serch';

function Productlist() {
  const [productList, setProduct] = useState([]);
  const [searchinput, setsearchinput] = useState(''); // Chaine vide au lieu de tableau
  const [Categories, setCategories] = useState([]);
  const [searchCategories, setsearchCategories] = useState(''); // Chaine vide au lieu de tableau

  // Fonction pour afficher les produits filtrés
  const displayProductS = () => {
    if (productList.length > 0) {
      const productsTemp = productList.filter((product) => {
        const matchesSearchInput =
          product.title.toLowerCase().includes(searchinput.toLowerCase()) || 
          product.id.toString().includes(searchinput);

        const matchesCategory =
          searchCategories === '' || product.category === searchCategories;

        return matchesSearchInput && matchesCategory;
      });

      if (productsTemp.length > 0) {
        return productsTemp.map((product, key) => (
          <Product product={product} key={key} />
        ));
      } else {
        return (
          <tr>
            <td colSpan="7">Aucun produit trouvé</td>
          </tr>
        );
      }
    }
    return (
      <tr>
        <td colSpan="7">Aucun produit</td>
      </tr>
    );
  };

  // Fonction pour récupérer les produits
  const getProductS = () => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((response) => setProduct(response));
  };

  // Fonction pour récupérer les catégories
  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((response) => setCategories(response));
  };

  useEffect(() => {
    getCategories();
    getProductS();
  }, []);

  // Gérer la recherche par texte
  const handleSearch = (value) => {
    setsearchinput(value);
  };

  // Gérer le clic sur une catégorie
  const handleClick = (e) => {
    const clickedCategory = e.target.innerText;
    setsearchCategories(clickedCategory);
    console.log("Catégorie sélectionnée:", clickedCategory);
  };

  return (
    <div className="container">
      <SerchForm onSearch={handleSearch} />
      {/* Affichage des catégories */}
      <div className="container text-center mt-5 mb-2 bg-secondary rounded">
        <div className="row">
          {Categories.map((Categorie, index) => (
            <button onClick={handleClick} key={index} className="col">
              {Categorie}
            </button>
          ))}
        </div>
      </div>

      <h1>Liste des produits</h1>
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
        <tbody>{displayProductS()}</tbody>
      </table>
    </div>
  );
}

export default Productlist;
