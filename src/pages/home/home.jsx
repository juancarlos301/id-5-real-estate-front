import { useEffect, useState} from "react"
import { Navbar } from "../../components/navbar/navbar"
import { Searcher } from "../../components/searcher/searcher"
import { Carrousel } from "../../containers/carrousel/carrousel"
import { Cart } from "../../components/carts/cart"
import { InputComponent} from "../../components/select/inputComponent"
import { SelectComponent} from "../../components/select/selectComponent"
import { ShoppingGuide } from "../../containers/shoppingGuide/shoppingGuide"
import { Footer } from "../../containers/footer/footer"
//css
import { Container, Title, Containerfeatured,
         ContainerListOfEstate, ContainerSearched, ContainerButtons,
         ContainerButton, TextButton, Iconfilter, IconMap,
         ContainerFilters, ContainerSearcher } from "./stylesHome"
import logo from '../../assets/foto2.jpeg'
import logo2 from '../../assets/foto17.jpg'
import logo3 from '../../assets/foto19.jpg'
const array = [
    {id: 1,price: 480000, time: '09 de septiembre 2022', address: 'CALLE OREJUELAS - N° 270', country: 'Colombia, Medellin,Miraflores',logo: logo, environments: 2, baths: 2, rooms: 4, meters: 1000},
    {id: 2,price: 580000, time: '07 de septiembre 2022', address: 'CALLE FANTASIA - N° 270',country: 'Lima, Cundinamarca,Miraflores', logo: logo2, environments: 2, baths: 1, rooms: 4, meters: 1000},
    {id: 3,price: 680000, time: '01 de septiembre 2022', address: 'CALLE CRUZ - N° 270',country: 'Argentina, Soopetran,Miraflores',logo: logo3, environments: 2, baths: 1, rooms: 5, meters: 2000},
    {id: 4,price: 780000, time: '10 de septiembre 2022', address: 'CALLE ESTACIONARIA - N° 270',country: 'Lima, Lima,Miraflores', logo: logo, environments: 2, baths: 2, rooms: 3, meters: 3000},
    {id: 5,price: 880000, time: '20 de septiembre 2022', address: 'CALLE ORIENTAL - N° 270',country: 'Perú, Belén,valle', logo: logo2, environments: 2, baths: 2, rooms: 2, meters: 4000},
]

export const Home = () => {

    const [data, setData] = useState([...array])
    const [estates, setEstates] = useState([])
    const [valueInput, setValueInput] = useState({pais: ''})
    const [searched, setSearched] = useState(false)
    const [errorInput, setErrorIput] = useState({})
    const [visibleFilters, setVisibleFilters] = useState(false)
    const [loading, setLoading] = useState(false)
    const [viweData, setViewData] = useState([])
    
    /*useEffect(()=>{
        fetch('http://localhost:3001/api/v1/properties')
        .then(res=>setViewData(res))
    },[])*/
    console.log(viweData)
    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value.toUpperCase()
        setValueInput({...valueInput, [name]: value})
    }
    const countries = array.map((item) => {
        const separateCountry = item.country.split(",", 1)
        return {country: separateCountry[0].toUpperCase()}
    })

    
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
                        <ContainerButton column={2}>
                            <TextButton><IconMap/>Mapa</TextButton>
                        </ContainerButton>
                    </ContainerButtons>
                        {!loading &&
                    <ContainerFilters visible={visibleFilters}>
                        <SelectComponent placeholder="Ciudad" nameInput={"pais"}
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
                                     img={element.logo}
                                     price={element.price}
                                     time={element.time}
                                     address={element.address}
                                     country={element.country}
                                     featured={false}/>
                        ))) :
                                (<div>not found</div>)
                        } 
                    </ContainerListOfEstate>
            </ContainerSearched>
            )}
            {!searched && <ShoppingGuide/>}
            <Footer/>
        </Container>
    )
} 