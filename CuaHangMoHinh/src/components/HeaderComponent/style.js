import { Row } from 'antd';
import styled from 'styled-components';

export const WrapperHeader = styled(Row)`
  background-color: #B22222;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 100%;
  padding: 10px 0;

`
export const WrapperTextHeader = styled.span`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`
export const WrapperHeaderAccout = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 8px;
`
export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`

