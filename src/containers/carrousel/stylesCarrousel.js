import styled from 'styled-components'

export const Container = styled.ul`
 width: 100%;
 display: flex;
 justify-content: flex-start;
 margin-left: 10px;
 overflow-x: scroll;
 padding: 0;
 list-style: none;
 &-webkit-scrollbar{
   height: 8px;
  }
&-webkit-scrollbar-track {
    background-color: rgba(40, 40, 53, 0.452); 
}
`