import styled from 'styled-components'

export const Container = styled.ul`
 width: 100%;
 display: flex;
 justify-content: flex-start;
 margin-left: 10px;
 overflow-x: scroll;
 padding: 0;
 list-style: none;
 @media (min-width: 1000px) {
   &::-webkit-scrollbar{
     height: 10px;
    }
  &::-webkit-scrollbar-track {
      background-color: black; 
  
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(168, 152, 152);
    border-radius: 20px;   
  }
 }
`