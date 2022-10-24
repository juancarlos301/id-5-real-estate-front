import { useState } from "react"
import { Navbar } from "../../components/navbar/navbar"
import { Searcher } from "../../components/searcher/searcher"
import { Carrousel } from "../../containers/carrousel/carrousel"
import { Cart } from "../../components/carts/cart"
import { Select} from "../../components/select/select"
//css
import { Container, ContainerSearcher, Title, Containerfeatured,
         ContainerListOfEstate, ContainerSearched, ContainerButtons,
         ContainerButton, TextButton, Iconfilter, IconMap,
         ContainerFilters } from "./stylesHome"
import logo from '../../assets/foto2.jpeg'
const array = [
    {price: 480000, time: '09 de septiembre 2022', address: 'CALLE OREJUELAS - N° 270', country: 'Miraflores, Medellin, colombia',logo: logo, baths: 2, rooms: 4, meters: 1000},
    {price: 580000, time: '07 de septiembre 2022', address: 'CALLE FANTASIA - N° 270',country: 'Miraflores, Lima, Bolivar', logo: logo, baths: 1, rooms: 4, meters: 1000},
    {price: 680000, time: '01 de septiembre 2022', address: 'CALLE CRUZ - N° 270',country: 'Altamira, Lima, Argentina',logo: logo, baths: 1, rooms: 5, meters: 2000},
    {price: 780000, time: '10 de septiembre 2022', address: 'CALLE ESTACIONARIA - N° 270',country: 'Miraflores, Lima, Perú', logo: logo, baths: 2, rooms: 3, meters: 3000},
    {price: 880000, time: '20 de septiembre 2022', address: 'CALLE ORIENTAL - N° 270',country: 'valle, Lima, Perú', logo: logo, baths: 2, rooms: 2, meters: 4000},
]

export const Home = () => {

    const [data, setData] = useState([...array])
    const [estates, setEstates] = useState([])
    const [valueInput, setValueInput] = useState({})
    const [searched, setSearched] = useState(false)
    const [errorInput, setErrorIput] = useState({})
    const [visibleFilters, setVisibleFilters] = useState(false)
    
    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value.toUpperCase()
        setValueInput({...valueInput, [name]: value})
    }
    return (
        <Container>
            <Navbar setSearched={setSearched} setValueInput={setValueInput} valueInput={valueInput}/>
            <ContainerSearcher>
                <Title aling={'center'}>Encuentra el hogar de tus sueños</Title>
                <Searcher handleSearch={handleSearch} setEstates={setEstates}
                            estates={data} valueInput={valueInput} setSearched={setSearched}/>
            </ContainerSearcher>
            {!searched ? (
                <Containerfeatured>
                    <Title alingLeft>Inmuebles destacados</Title>
                    <Carrousel>
                        {data.map((element, index)=>(
                        <Cart key={index}
                                img={element.logo}
                                price={element.price}
                                time={element.time}
                                address={element.address}
                                SelectMinMax country={element.country}
                                baths={element.baths}
                                featured={true}/>
                        ))
                        }
                    </Carrousel>
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
                    <ContainerFilters visible={visibleFilters}>
                        <Select placeholder="Cantidad de baños" nameInput={"baños"}
                                handleSearch={handleSearch}
                                errorInput={errorInput}
                                setErrorIput={setErrorIput}
                                />
                        <Select placeholder="Cantidad de habitaciones" nameInput={"habitaciones"}
                                handleSearch={handleSearch}
                                errorInput={errorInput}
                                setErrorIput={setErrorIput}
                                />
                        <Select placeholder="Precio" nameInput={"precio"}
                                handleSearch={handleSearch} 
                                errorInput={errorInput}
                                setErrorIput={setErrorIput}
                            />
                        <Select placeholder="metros" 
                                      handleSearch={handleSearch} 
                                      errorInput={errorInput}
                                      setErrorIput={setErrorIput}
                                      minmax
                                      validate="decimal"
                                      />
                    </ContainerFilters>
                    {estates.length > 0 && (
                    <Title alingLeft marginTop>
                        {estates?.length} Departamentos en alquiler en {estates[0]?.country.split(",", 1)}
                     </Title>
                    )}
                    <ContainerListOfEstate>
                        {estates.length > 0 ? (estates.map((element, index)=>(
                                <Cart key={index}
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
            
        </Container>
    )
} 