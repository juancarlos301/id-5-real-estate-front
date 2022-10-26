import styled from 'styled-components'
import { BsSliders, BsGeoAlt } from "react-icons/bs";

export const Container = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
`
export const ContainerSearcher = styled.div`
 width: 100%;
 min-height: 130px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 30px 0 0 ;
 flex-wrap: wrap;
`
export const Title = styled.h2`
width: 100%;
font-weight: 600;
font-size: 13px;
text-align: ${props => props.aling};
line-height: 18px;
font-family: 'Open Sans';
color: #000;
margin-left: ${props=> props.alingLeft ? '10px': '0'};
margin-bottom:10px ;
margin-top: ${props=> props.marginTop ? '20px': '0'};
`
export const Containerfeatured = styled.div`
 width: 100%;
 overflow: hidden;
`
export const ContainerSearched = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 margin-bottom: 60px;
`
export const ContainerButtons = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 2;
 gap: 0 15px;
 padding: 0 10px;
`
export const ContainerButton = styled.div`
 width: 100%;
 grid-column-start: ${props => props.column};
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 4px 0;
 background-color: #d7d7d7d1;
 cursor: pointer;
`
export const TextButton = styled.p`
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 13px;
 line-height: 18px;
 background: transparent;
`
export const ContainerFilters = styled.div`
 width: 100%;
 min-height: 200px;
 display: ${props => props.visible ? "flex" : "none"};
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 margin-top: 10px;
`
export const ContainerListOfEstate = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
 gap: 30px 10px;
 margin:0 10px;
`
export const Iconfilter = styled(BsSliders)`
 margin: 0 8px 0 0;
 width: 12px;
 height: 10px;
 background: transparent;
`
export const IconMap = styled(BsGeoAlt)`
 margin: 1px 8px 0 0;
 width: 12px;
 height: 11px;
 background: transparent;
`
