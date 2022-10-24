import { Container, SearchButton, Input } from "./stylesSearcher"
import {BsSearch} from 'react-icons/bs'
export const Searcher = ({handleSearch, setEstates, estates, valueInput, setSearched}) => {
    const searchData = () => {
        const {pais, baños, habitaciones, precio, min, max} = valueInput
        let newList;
        if(pais === ""){
            setSearched(false)
        } else {
             newList = estates.filter((estate)=> estate.country.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toUpperCase()
            .includes(pais.normalize("NFD").replace(/[\u0300-\u036f]/g, '')))
            setEstates(newList)
            setSearched(true)
        }
        if(baños){
            newList = newList.filter((estate)=> estate.baths >= baños)
            setEstates(newList)
        }
        if(habitaciones){
            newList = newList.filter((estate)=> estate.rooms >= habitaciones)
            setEstates(newList)
        }
        if(precio){
            newList = newList.filter((estate)=> estate.price <= precio)
            setEstates(newList)
        }
        if(min){
            newList = newList.filter((estate)=> estate.meters >= min)
            setEstates(newList)
        }
        if(max){
            newList = newList.filter((estate)=> estate.meters <= max)
            setEstates(newList)
        }
    }
    return (
        <Container>
            <BsSearch size={'15px'} style={{ margin: '0 12px'}}/>
            <Input type="text" placeholder="En que ciudad deseas vivir"
             name="pais" onChange={(e)=>handleSearch(e)}/>
            <SearchButton onClick={()=>searchData()}>Buscar</SearchButton>
        </Container>
    )
} 