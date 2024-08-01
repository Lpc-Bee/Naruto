import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: flex-start;
    height: 40px;
    font-size: 20px;
`
export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background: rgb(1 3,92,182);
        span {
        color: #fff,
        }
    }
    width: 100%;
    text-align: center;
`
export const WrapperProducts = styled.div`
    display: flex;
    gap: 10px;
    margin-top: '20px';
    flex-wrap :'wrap';
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
`;
