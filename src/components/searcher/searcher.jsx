import { Container, SearchButton, Input } from "./stylesSearcher"
import {BsSearch} from 'react-icons/bs'
export const Searcher = ({handleSearch, setEstates, estates, valueInput, setSearched}) => {
    const searchData = () => {
        const {country} = valueInput
        
        const newList = estates.filter((estate)=> estate.country.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toUpperCase()
        .includes(country.normalize("NFD").replace(/[\u0300-\u036f]/g, '')))
        setEstates(newList)
        setSearched(true)
    }
    return (
        <Container>
            <BsSearch size={'15px'} style={{ margin: '0 12px'}}/>
            <Input type="text" placeholder="ingresa la ubicación deseada"
             name="country" onChange={(e)=>handleSearch(e)}/>
            <SearchButton onClick={()=>searchData()}>Buscar</SearchButton>
        </Container>
    )
} 