import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import {Image } from 'antd'
import imageLogo  from '../../assets/images/logo.png'
import { EyeFilled , EyeInvisibleFilled} from '@ant-design/icons'

const SignUpPage = () => {
  const [ isShowPassword ] = useState(false)
  const [ isShowConfirmPassword] = useState(false)
  return (
    <div style={{ display: 'flex' , alignItems: 'center' , justifyContent:'center' , background:'rgba(0,0,0,0.53)' , height: '100vh'}}>
      <div style={{ width: '800px' , height: '445px' , borderRadius: '6px' , background:'#fff' , display: 'flex'}}> 
      <WrapperContainerLeft>
        <h1> Xin Chào </h1>
        <p> Đăng nhập vào tài khoản </p>
        <InputForm style = {{marginBottom: '10px'}} placeholder="acb@gmail.com" />
        <div style={{position: 'relative'}}>
          <span 
            style={{
              zIndex:10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}>
            {
              isShowPassword ? (
                <EyeFilled/>
              ) : (
                <EyeInvisibleFilled/>
              )
            }
          </span>
          <InputForm placeholder="Password" style={{ isShowPassword:'10px' , marginBottom: '10px'}}/>
        </div>
        <div style={{position: 'relative'}}>
          <span 
            style={{
              zIndex:10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}>
            {
              isShowConfirmPassword ? (
                <EyeFilled/>
              ) : (
                <EyeInvisibleFilled/>
              )
            }
          </span>
          <InputForm placeholder="Comfirm Password" type = {isShowConfirmPassword ? "text" :"Comfirm password"}/>
        </div>
  
        <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: 'rgb(255,57,69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng Ký'}
            styleTextButton={{ color: '#fff' , fontSize: '15px' , fontWeight: '700'}}
            >
            </ButtonComponent>
            <p >Bạn Đã Có Tài Khoản? <WrapperTextLight> Tạo Tài Khoản </WrapperTextLight></p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
            <Image src={imageLogo} preview={false} alt="image-logo" height="140px" width="150px"/>
            <h2>Mua sắm tại Uniimart</h2>
      </WrapperContainerRight>
    </div>
    </div>
  )
}

export default SignUpPage
