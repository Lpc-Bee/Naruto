import styled from "styled-components";
import { Card } from "antd";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    }
`

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56,56,61);
`
export const WrapperReportText = styled.div`
    font-size: 16px;
    color: rgb(128,128,137);
    display: flex;
    align-items:center;
`
export const WrapperPriceText = styled.div`
    color: rgb(255,66,78);
    font-size: 18px;
    font-weight: 500;
    margin: 6px 0 4px;
`
export const WrapperDiscountText = styled.span`
    color: rgb(255,66,78);
    font-size: 14px;
    font-weight: 500;
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120)
`