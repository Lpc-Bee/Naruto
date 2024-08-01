import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'
import Layout from '../../components/LayoutComponent/Layout'

const ProductDetailsPage = () => {
  return (
    <Layout>
      <div style = {{ padding: '0 120px' , background:'#efefef' , height: '1000px'}}>
        <div>
          <ProductDetailsComponent/>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetailsPage