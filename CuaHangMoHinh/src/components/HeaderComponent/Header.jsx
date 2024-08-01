import { Badge, Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonputSearch/ButtonInputSearch';

const Header = () => {
  return (
    <div style={{ width:'100%' , background: 'rgb(26,148,255)' , display:'flex' , justifyContent: 'center'}}>
      <WrapperHeader >
        <Col span={5} >
          <WrapperTextHeader >
            Uniimart
          </WrapperTextHeader>
        </Col>
        <Col span={12}>
        <ButtonInputSearch
          size = "large"
          bodered={false}
          textButton="Tìm Kiếm"
          placeholder ="Tìm Kiếm Sản Phẩm Của Bạn"
          //onSearch={onSearch}
        />
        </Col>
        <Col span={6} style={{display: 'flex' , gap:'50px' , alignItems: 'center'}} >
          <WrapperHeaderAccout>
            <UserOutlined style = {{ fontSize: '30px'}}/>
            <div>
              <WrapperTextHeaderSmall>Đăng Nhập/Đăng Ký</WrapperTextHeaderSmall>
              <div>
              <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
              <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>
          <div>
              <Badge count = {5} size="small">
                <ShoppingCartOutlined style = {{ fontSize: '25px' , color: '#fff' }} />
              </Badge>
              <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
    </WrapperHeader>
    </div>
    
  )
}

export default Header
