import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.jpg' 
import slider2  from '../../assets/images/slider2.jpg'
import slider3  from '../../assets/images/slider3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import Layout from '../../components/LayoutComponent/Layout'
const HomePage = () => {
  const arr = ['Vua Hải Tặc' , 'Naruto' , 'Robot' ]
  return (
    <Layout>
      <div style={{ width: '100%' , margin:'0 auto'}}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return(
            <TypeProduct name = {item} key ={item}/>
          )
        })}
      </WrapperTypeProduct>
      </div>
        <div className='body' style={{width: '100%', backgroundColor:'#efefef'}}> 
          <div id = "container" style={{ backgroundColor: '#efefef' , padding: '0 120px', height:'1100px'  }}>
            <SliderComponent arrImages={[slider1 , slider2 , slider3]}/>
            <WrapperProducts>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
            </WrapperProducts>
              <div style={{width: '100%' , display: 'flex' , justifyContent: 'center' , marginTop: '10px'}}>
                <WrapperButtonMore textButton="Xem Thêm" type="outline" styleButton={{
                  border: '1px solid rgb(11,116,229)' , color: 'rgb(11,116,229)',
                  width: '240px' , height : '38px' , borderRadius: '4px'
                }}
                styleTextButton={{ fontWeight: 500}}/>
              </div>
          </div>
        </div>
    </Layout>

    //chỉnh khung nền màu xám của slide home 
  )
}

export default HomePage
