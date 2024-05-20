import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/Products/ProductCard'
import Loader from '../../Components/Loader/Loader'



const ProductDetail = () => {
  const [Product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false) 
  const {productId}=useParams()
  
  useEffect(() => {
    setisLoading(true)
    axios.get(`${ productUrl }/products/${productId}`)
    .then((res)=>{
      setProduct(res.data)
      setisLoading(false)
    }).catch((err)=>{
      console.log(err)
      setisLoading(false)
    })
  }, [])
  return (
    <LayOut>
      {isLoading? (<Loader/>) : (
    
<ProductCard Product={Product} 
flex = {true}
renderDesc={true}
renderAdd={true}

        />
        )}
    </LayOut>
  )
}

export default ProductDetail

