import styled from 'styled-components'

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
 margin: 30px 0 ;
 flex-wrap: wrap;
`
export const Title = styled.h2`
font-weight: 600;
font-size: 13px;
line-height: 18px;
font-family: 'Open Sans';
color: #000;
margin-left: ${props=> props.alingLeft ? '10px': '0'};
margin-bottom:10px ;
`
export const Containerfeatured = styled.div`
 width: 100%;
 overflow: hidden;
 margin-bottom: 200px;
`
export const ContainerListOfSearch = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
 gap: 30px 10px;
 margin:0 10px;
`