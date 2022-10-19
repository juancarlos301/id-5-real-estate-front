import styled from 'styled-components'
import {  BiRuler as ruler} from "react-icons/bi";

export const Container = styled.div`
 max-width: 220px;
 width: 220px;
 min-height: 240px;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
`

export const Img = styled.img`
 width: 220px;
 height: 140px;
 margin-bottom: 15px;
`

export const ContainerData = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 padding: 0 8px;
`
export const ContainerOne = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 2;
 height: fit-content;
 margin: 0 0 7px;
`
export const AlertZona = styled.div`
 grid-column-start: 2;
 width: 60px;
 height: fit-content;
 padding: 3px;
 display: flex;
 justify-content: center;
 border-radius: 20px;
 border: 2px solid rgba(0, 0, 0, 0.80);
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 7px;
 line-height: 10px;
 color: rgba(0, 0, 0, 0.60);
 margin: 0;
`

export const Text1 = styled.p`
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 600;
 font-size: ${props=>props.Size};
 line-height: 12px;
 text-align: center;
 color: #000;
`
export const ContainerTwo = styled.div`
 display: flex;
 justify-content: flex-start;
 flex-direction: ${props=>props.row ? "row": "column"};
 align-items: flex-start;
 width: 100%;
 margin: ${props=>props.row ? "7px 0": "0"};
 
`
export const Text2 = styled.span`
 color: ${props=> props.disabledColor ? 'rgba(0, 0, 0, 0.5)' : '#000'};
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 9px;
 line-height: 12px;
 text-align: center;
`

export const DimensionsText = styled.span`
 color: rgba(0, 0, 0, 0.5);
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 8px;
 line-height: 8px;
 text-align: center;
 margin: 0 4px 0 0;
`
export const DimensionsContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: fit-content;
 height: fit-content;
`

export const Ruler = styled(ruler)`
 transform: rotate(270deg);
 fill: rgba(0, 0, 0, 0.5);
`