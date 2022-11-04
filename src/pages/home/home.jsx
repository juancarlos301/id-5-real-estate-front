import { useEffect, useState} from "react"
import { Navbar } from "../../components/navbar/navbar"
import { Searcher } from "../../components/searcher/searcher"
import { Carrousel } from "../../containers/carrousel/carrousel"
import { Cart } from "../../components/carts/cart"
import { InputComponent} from "../../components/select/inputComponent"
import { SelectComponent} from "../../components/select/selectComponent"
import { ShoppingGuide } from "../../containers/shoppingGuide/shoppingGuide"
import { Footer } from "../../containers/footer/footer"
import { Promotion } from "../../components/promotion/Promotion"
//css
import { Container, Title, Containerfeatured,
         ContainerListOfEstate, ContainerSearched, ContainerButtons,
         ContainerButton, TextButton, Iconfilter, IconMap,
         ContainerFilters, ContainerSearcher } from "./stylesHome"
import img from '../../assets/foto17.jpg'

export const Home = () => {
    const [data, setData] = useState()
    const [estates, setEstates] = useState([])
    const [valueInput, setValueInput] = useState({pais: ''})
    const [searched, setSearched] = useState(false)
    const [errorInput, setErrorIput] = useState({})
    const [visibleFilters, setVisibleFilters] = useState(false)
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3001/api/v1/properties")
        .then(res => res.json())
        .then(data=>{
            setData(data)
            const getCountries = data.map((item) => {
                return{country: item.country.toUpperCase()}
            })
            setCountries(getCountries)
        })
    }, [])
    console.log(data)

    const [map, setMap] = useState(false)
    
    const handleMap = event => {
        setMap(current => !current)
    }

    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value.toUpperCase()
        setValueInput({...valueInput, [name]: value})
    }    
    /*const countries = array.map((item) => {
        const separateCountry = item.country.split(",", 1)
        return {country: separateCountry[0].toUpperCase()}
    })*/


    return (
        <Container>
            <Navbar setSearched={setSearched} setValueInput={setValueInput} valueInput={valueInput}/>
            <ContainerSearcher marginBot={searched}>
                <Title aling={'center'}>Encuentra el hogar de tus sueños</Title>
                <Searcher handleSearch={handleSearch} setEstates={setEstates}
                            estates={data} valueInput={valueInput} setSearched={setSearched} setLoading={setLoading}/>
            </ContainerSearcher>
            {!searched ? (
                <Containerfeatured>
                    <Title alingLeft>Inmuebles destacados</Title>
                    <Carrousel data={data}/>
            </Containerfeatured>
            ): (
                <ContainerSearched>
                    <ContainerButtons>
                        <ContainerButton column={1} onClick={()=>setVisibleFilters(prevState=> !prevState)}>
                            <TextButton><Iconfilter/>Filtros</TextButton>
                        </ContainerButton>
                        <ContainerButton  column={2}>
                            <ContainerButton onClick={handleMap}>
                            <TextButton ><IconMap/>Mapa</TextButton>
                            </ContainerButton>
                        </ContainerButton>

                    </ContainerButtons>
                    {map && <MapComponent />}
                        {!loading &&
                    <ContainerFilters visible={visibleFilters}>
                        <SelectComponent placeholder="País" nameInput={"pais"}
                                handleSearch={handleSearch}
                                countries={countries}
                                defaultValue={valueInput.pais}
                                />
                        <InputComponent placeholder="Cantidad de ambientes" nameInput={"ambientes"}
                                handleSearch={handleSearch}
                                errorInput={errorInput}
                                setErrorIput={setErrorIput}
                                />
                        <InputComponent placeholder="Cantidad de baños" nameInput={"baños"}
                                handleSearch={handleSearch}
                                errorInput={errorInput}
                                setErrorIput={setErrorIput}
                                />
                        <InputComponent placeholder="Cantidad de habitaciones" nameInput={"habitaciones"}
                                handleSearch={handleSearch}
                                errorInput={errorInput}
                                setErrorIput={setErrorIput}
                                />
                        <InputComponent placeholder="Precio" nameInput={"precio"}
                                handleSearch={handleSearch} 
                                errorInput={errorInput}
                                setErrorIput={setErrorIput}
                            />
                        <InputComponent placeholder="metros" 
                                      handleSearch={handleSearch} 
                                      errorInput={errorInput}
                                      setErrorIput={setErrorIput}
                                      minmax
                                      validate="decimal"
                                      />
                    </ContainerFilters>
}
                    {estates.length > 0 && (
                    <Title alingLeft marginTop>
                        {estates?.length} Departamentos en alquiler en {estates[0]?.country.split(",", 1)}
                     </Title>
                    )}
                    <ContainerListOfEstate changeDisplay={estates.length}>
                        {estates.length > 0 ? (estates.map((element, index)=>(
                                <Cart key={index}
                                     id={element.id}
                                     img={img}
                                     price={element.price}
                                     time={element.createdAt}
                                     address={element.address}
                                     country={element.country}
                                     city={element.city}
                                     featured={false}/>
                        ))) :
                                (<div>not found</div>)
                        } 
                    </ContainerListOfEstate>
            </ContainerSearched>
            )}
            {!searched && <Promotion/>}
            {!searched && <ShoppingGuide/>}
            <Footer/>
        </Container>
    )
} 