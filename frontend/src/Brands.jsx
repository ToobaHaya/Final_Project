import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { AppRoute } from './App'
import './Category.css';

export default function Brand() {
    const [Brands, setBrands] = useState([])
    const [loader, setLoader] = useState(true)

   
    useEffect(() => {
      const fetchBrands = async () => {
          try {
              const response = await axios.get(`${AppRoute}api/getAllbrands`);
              setBrands(response.data.Brands);
              setLoader(false);
          } catch (error) {
              console.log(error);
          }
      };


      fetchBrands();
  }, []);


    return (
        <>
       
        <div className="container my-3 py-3">
        <div className="text-center my-3 py-3">
          <h2>Brands</h2>
        </div>
        {
                loader
                    ?
                    <Loader />
                    :    
        <div className='category'>
          {Brands.map((val, key) => (
             <Link className='text-decoration-none' to={`/products/brand/${val.BrandName}`} key={key}>
            <GuestCards key={key} image={val.BrandImage} name={val.BrandName.replace('-', ' ')} />
            </Link>
          ))}
        </div>
}
      </div>
    </>
                )
              };

              
              
              
              