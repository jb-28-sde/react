import React, { useState } from 'react'
import './Product.css'

export default function Product() {
  const [data, setData] = useState([])

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json()).then((val) => setData(val))



  return (
    <>
      <h1 className='title'>Our Products</h1>
      <hr />
      <div className='product-grid'>
        {data.map((item) =>
          <div className="product-card">
            <img src={item.image} height="100px" width="100px" alt="" className='product-img' />
            <div className="product-info">
              <h2 className='product-name'>{item.title}</h2>
              <p className='product-price'>₹{item.price}</p>
              <div className="product-rating">
                <span className='stars'>
                  {"★".repeat(Math.round(item.rating.rate))}
                  {"☆".repeat(5 - Math.round(item.rating.rate))}
                </span>
              </div>
              <button className='add-btn'>🛒 Add To Cart</button>
            </div>

          </div>


        )}
      </div>

    </>
  );
}