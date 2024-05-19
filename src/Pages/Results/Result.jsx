import React, { useEffect, useState } from 'react'
import classes from './Result.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Products/ProductCard'


const Result = () => {
  const [Results, setResults] = useState([]);
  const {categoryName} = useParams()
 useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
      setResults(res.data)
    }).catch((err)=>{
      console.log(err)
    })
   
  }, [])

  return (
    <LayOut>
   <section>

<h1 style={{ padding:"30px" }}>Results </h1>
<p style={{ padding:"30px" }}>Category </p>
<hr />
<div className={classes.products__container}>
  {Results?.map((Product)=>(
    <ProductCard
    key={Product.id}
    Product={Product}
    />
  ))}

</div>
</section>
    </LayOut>
  )
}

export default Result


