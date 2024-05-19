import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../Products/ProductCard'
import classes from './Product.module.css'

const Product = () => {
    const [Products,setProducts] = useState ();

    useEffect (()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <section className={classes.product__container}>
        
        {
            Products?.map((singleProduct) => {
                return  <ProductCard  Product={singleProduct} key={singleProduct.id} />
            })
        }
    </section>
    
  )
}

export default Product
