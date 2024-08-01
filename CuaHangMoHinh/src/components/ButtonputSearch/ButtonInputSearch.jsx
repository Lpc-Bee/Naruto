
import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const {
        size,placeholder, textButton , 
        bordered , backgroundColorInput="#fff",
        backgroundColorButton='#F08080',
        colorButton = "#ff"
        } = props
    return (
    <div style={{ display: 'flex'}}>
        
        <InputComponent
            size={size} 
            placeholder= {placeholder} 
            bordered={bordered} 
            style={{backgroundColor: backgroundColorInput}}
        />
        <ButtonComponent
            size={size}
            textButton={textButton}
            styleButton={{background: backgroundColorButton , bordered : !bordered && 'none' }}
            icon={<SearchOutlined color={colorButton} style={{color : '#fff'}}/>}
            styleTextButton={{color :colorButton}}
        />
        
    </div>
  )
}

export default ButtonInputSearch
