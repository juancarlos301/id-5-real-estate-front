import { Container, SearchButton, Input } from "./stylesSearcher"
import {BsSearch} from 'react-icons/bs'
export const Searcher = () => {
    return (
        <Container>
            <BsSearch size={'15px'} style={{ margin: '0 12px'}}/>
            <Input type="text" placeholder="ingresa la ubicación deseada"/>
            <SearchButton>Buscar</SearchButton>
        </Container>
    )
} 