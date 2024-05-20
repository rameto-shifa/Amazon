import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../Products/ProductCard'
import classes from './Product.module.css'
import Loader from '../Loader/Loader'


const Product = () => {
    const [Products,setProducts] = useState ();
    const [isLoading, setisLoading] = useState(false);

    useEffect (()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProducts(res.data)
            setisLoading(false);
        }).catch((err)=>{
            console.log(err)
            isLoading(false);

        })
    },[])
  return (
    <>
    {isLoading? (<Loader/>) : (
    <section className={classes.product__container}>
        
        {
            Products?.map((singleProduct) => {
                return  <ProductCard renderAdd={true}
                Product={singleProduct} key={singleProduct.id} />
            })
        }
    </section>
    )}
    </>
  )
}

export default Product
