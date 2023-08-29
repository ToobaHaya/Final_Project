import React, { useEffect, useState } from 'react';
import GuestCards from './GuestCards';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader'
import './Category.css'
import { AppRoute } from './App'



export default function Category() {
  const [categories, setCategory] = useState([]);
  const [loader, setLoader] = useState(true);


  
  useEffect(() => {
      const fetchCategories = async () => {
          try {
              const response = await axios.get(`${AppRoute}api/all-categories`);
              console.log(response.data); // Log the response data
              setCategory(response.data.categories);
              setLoader(false);
          } catch (error) {
              console.log(error);
          }
      };

      fetchCategories();
  }, []);

  return (
    <div className="container my-5">
    <div className="text-center my-3 py-3">
      <h2>Category</h2>
    </div>
    {loader ? (
      <Loader />
    ) : (
      <div className='category'>
        {categories.map((val, key) => (
          <Link className='text-decoration-none' to={`/product/category/${val.CategoryName}`} key={key}>
            <GuestCards   image={val.CategoryImage} name={val.CategoryName.replace('-', ' ')} />
          </Link>
        ))}
      </div>
    )}
  </div>
  );
}
