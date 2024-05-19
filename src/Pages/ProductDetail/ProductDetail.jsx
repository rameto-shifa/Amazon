import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/Products/ProductCard'


const ProductDetail = () => {
  const [Product, setProduct] = useState({});
  const {productId}=useParams()
  
  useEffect(() => {
    axios.get(`${ productUrl }/products/${productId}`)
    .then((res)=>{
      setProduct(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  return (
    <LayOut>
    
<ProductCard Product={Product} />

    </LayOut>
  )
}

export default ProductDetail

