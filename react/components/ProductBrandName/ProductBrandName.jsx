import React from "react"
import { useProduct } from 'vtex.product-context'
import styles from './style.css'

const ProductBrandName = () => {

  const productContextValue = useProduct()

  //console.log("productContextValue --> ", productContextValue)

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <p className={`${styles.paragraph} flex`}>
          <span className={`${styles.icon}`}></span>
          <span className={`${styles.highlight}`}>{productContextValue?.product?.brand}</span>
        </p>
      </div>
    </>
  )
}

export default ProductBrandName;
