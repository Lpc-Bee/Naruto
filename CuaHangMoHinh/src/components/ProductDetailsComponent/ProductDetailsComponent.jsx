import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/na1.jpg'
import imageProductSmall from '../../assets/images/aa.png'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColIamge, WrapperStyleImagaSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import {StarFilled , PlusOutlined ,MinusOutlined, } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ProductDetailsComponent = () => {
  const onChange = () => {}
  return (
    <Row style={{padding:'10px', background: '#fff' , borderRadius:'4px'}}>
        <Col span={10} style={{ borderRight: '1px solid #e5e5e5' , paddingRight:'8px'}} >
            <Image src={imageProduct} alt="image product" preview={false}/>
            <Row style = {{ paddingTop:'10px' , justifyContent: 'space-between'}}>

              <WrapperStyleColIamge span = {3}>
                <WrapperStyleImagaSmall src ={imageProductSmall} alt="image product" preview={false}/>
              </WrapperStyleColIamge>

              <WrapperStyleColIamge span = {3}>
                <WrapperStyleImagaSmall src ={imageProductSmall} alt="image product" preview={false}/>
              </WrapperStyleColIamge>

              <WrapperStyleColIamge span = {3}>
                <WrapperStyleImagaSmall src ={imageProductSmall} alt="image product" preview={false}/>
              </WrapperStyleColIamge>

              <WrapperStyleColIamge span = {3}>
                <WrapperStyleImagaSmall src ={imageProductSmall} alt="image product" preview={false}/>
              </WrapperStyleColIamge>

              <WrapperStyleColIamge span = {3}>
                <WrapperStyleImagaSmall src ={imageProductSmall} alt="image product" preview={false}/>
              </WrapperStyleColIamge>

              <WrapperStyleColIamge span = {3}>
                <WrapperStyleImagaSmall src ={imageProductSmall} alt="image product" preview={false}/>
              </WrapperStyleColIamge>

            </Row>
        </Col>
        <Col span={12} style={{ paddingLeft: '10px'}}> 
          <WrapperStyleNameProduct> 
          Tên sản phẩm: Mô hình naruto cửu vĩ sasuke itachi siêu nét
          </WrapperStyleNameProduct>
          <div>
            <StarFilled style={{ fontSize:'12px' , color: 'rgb(253,216,54)' }}/>
            <StarFilled style={{ fontSize:'12px' , color: 'rgb(253,216,54)' }}/>
            <StarFilled style={{ fontSize:'12px' , color: 'rgb(253,216,54)' }}/>
            <WrapperStyleTextSell> | Đã bán 100+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct> 200.000 </WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
              <span> Giao đến </span>
              <span className='address'>Q12 . Hồ Chí Minh</span>
              <span className='change-address'> Đổi địa chỉ </span>
          </WrapperAddressProduct>
          <div style={{ margin: '10px 0 20px' , padding: '10px 0' , borderTop: '1px solid #e5e5e5' , borderBottom: '1px solid #e5e5e5' }}>
              <div style={{marginBottom: '8px'}}>Số lượng</div>
              <WrapperQualityProduct>
                <button style={{border: 'none', background: 'stransparent'}}>
                  <MinusOutlined style={{color: '#000', fontSize:'20px'}} />
                </button>
                  <WrapperInputNumber min={1} max={10} defaultValue={3} onChange={onChange} size="small"  />  
                <button style={{border: 'none', background: 'stransparent'}}>       
                  <PlusOutlined style={{color: '#000', fontSize:'20px'}}  />
                </button> 
              </WrapperQualityProduct>
          </div>
          <div style={{display: 'flex' , alignItems : 'center' , gap: '12px'}}>
            <ButtonComponent
                bordered={false}
                size={40}
                styleButton={{
                  background: 'rgb(255,57,69)',
                  height: '48px',
                  width: '220px',
                  border: 'none',
                  borderRadius: '4px'
                }}
                textButton={'Chọn Mua'}
                styleTextButton={{ color: '#fff' , fontSize: '15px' , fontWeight: '700'}}
                >
            </ButtonComponent>
            <ButtonComponent
              size={40}
              styleButton={{
                background: '#fff',
                height: '48px',
                width: '220px',
                border: '1px solid rgb(13,92,182)',
                borderRadius: '4px'
              }}
              textButton={'Mua Trả Sau'}
              styleTextButton={{ color: 'rgb(13,92,182)' , fontSize:'15px'}}
            >
            </ButtonComponent>
          </div>
        </Col>
    </Row>
  )
}

export default ProductDetailsComponent
