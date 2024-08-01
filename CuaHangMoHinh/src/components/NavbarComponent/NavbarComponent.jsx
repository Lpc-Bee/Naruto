import React from 'react'
import { WapperLableText, WapperTextPrice, WrapperContent, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const onChange= () => {}

    const renderContent = (type , options) => {
        switch(type) {
            case 'text':
                return options.map((option) =>{
                    return (
                        <WrapperTextValue> {option} </WrapperTextValue>
                    )
                })
            case'checkbox':
                return (
                <Checkbox.Group style={{ width: '100%',display: 'flex' , flexDirection: 'column' , gap: '12px'}} onChange={onChange}>
                    {options.map((option) => {
                        return(
                            <Checkbox style={{ marginLeft: 0}} value={option.value}>{option.lable}</Checkbox>
                        )
                    })}
                    <Checkbox value="B">B</Checkbox>
                </Checkbox.Group>
                )
        //Chỉnh sữa vị trí và siz of star
            case'star':
                return options.map((option) => {
                    return(
                    <div style={{ display: 'flex', gap: '4px'}}>
                        <Rate style={{ fontSize: '12px' }}  disabled defaultValue={option}/>
                        <span>{`tu ${option} sao`}</span>
                    </div>
                    )
                    })
                    //Chỉnh size- màu nền chọn giá ở đâyyyyy
            case'price':
                return options.map((option) => {
                    return(
                      <WapperTextPrice> {option}</WapperTextPrice>
              
                    )
                    })
            default:
                return {}
        }
    }
    return (
    <div style={{backgroundColor : '#fff'}}>      
        <WapperLableText></WapperLableText>
        <WrapperContent>
            {renderContent('text' , ['Vua Hải Tặc' , 'Naruto' , 'Robot'])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('checkbox' , [
                    {value: 'a' , label: 'A'},
                    {value: 'b' , label: 'B'}
                ])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('star',[3,4,5])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('price',['dưới 100.000','trên 2000.000'])}
        </WrapperContent>
    </div>
  )
}

export default NavbarComponent
