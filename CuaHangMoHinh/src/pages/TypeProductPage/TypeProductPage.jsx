import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'
import Layout from '../../components/LayoutComponent/Layout'

const TypeProductPage = () => {
  const onChange = () => {}
  return (
    <Layout>
      <div style = {{ width: '100%' , background:'#efefef' }}>
        <div style={{ width: '100%' , paddingTop: '0 auto'}}>
        <Row style = {{ flexWrap: 'nowrap' , paddingTop:'10px' }}>
            <WrapperNavbar span={4}>
              <NavbarComponent/>
            </WrapperNavbar>
          <Col span={20}>
            <WrapperProducts >
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
            </WrapperProducts>
            <Pagination defaultCurrent = {2} total = {100} onChange={onChange} style = {{textAlign: 'center' , marginTop: '10px'}}/>
          </Col>
        </Row>
        </div>   
      </div>
    </Layout>
    // Chỉnh số trang sản phẩm tìm kiếm 
  )
}

export default TypeProductPage
