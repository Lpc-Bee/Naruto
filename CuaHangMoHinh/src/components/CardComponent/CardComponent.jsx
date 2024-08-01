import { Card } from 'antd'
import React from 'react'
import { StyleNameProduct , WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {StarFilled} from '@ant-design/icons'
const CardComponent = () => {
  return (
        <Card
            hoverable
            headStyle={{ width: '200px' , height:'200px'}}
            style={{ width: 210}} //chỉnh kích cỡ của khung sp
            bodyStyle={{ padding: '10px'}}
            cover={<img alt="example" src="https://www.freepnglogos.com/uploads/deadpool-png/deadpool-portrait-transparent-png-stickpng-2.png"/>}
        >
            <StyleNameProduct> Iphone </StyleNameProduct> 

            <WrapperReportText>
                <span style={{ marginRight: '4px'}}>
                    <span>4.9 </span> <StarFilled style={{ fontSize:'15px' ,color: 'yellow'}}/> 
                </span>
                <WrapperStyleTextSell> | Đã bán 40+ </WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px'}}>1.000.000đ</span>
                <WrapperDiscountText>
                    -5% 
                </WrapperDiscountText>
            </WrapperPriceText>

        </Card>
  )
}

export default CardComponent
