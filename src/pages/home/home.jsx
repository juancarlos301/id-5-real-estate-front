import { useState } from "react"
import { Navbar } from "../../components/navbar/navbar"
import { Searcher } from "../../components/searcher/searcher"
import { Carrousel } from "../../containers/carrousel/carrousel"
import { Cart } from "../../components/carts/cart"

//css
import { Container, ContainerSearcher, Title, Containerfeatured, ContainerListOfSearch } from "./stylesHome"
import logo from '../../assets/foto2.jpeg'
const array = [
    {price: 480000, time: '09 de septiembre 2022', address: 'CALLE OREJUELAS - N° 270', country: 'Miraflores, Medellin, colombia',logo: logo},
    {price: 580000, time: '07 de septiembre 2022', address: 'CALLE FANTASIA - N° 270',country: 'Miraflores, Lima, Bolivar', logo: logo},
    {price: 680000, time: '01 de septiembre 2022', address: 'CALLE CRUZ - N° 270',country: 'Altamira, Lima, Argentina',logo: logo},
    {price: 780000, time: '10 de septiembre 2022', address: 'CALLE ESTACIONARIA - N° 270',country: 'Miraflores, Lima, Perú', logo: logo},
    {price: 880000, time: '20 de septiembre 2022', address: 'CALLE ORIENTAL - N° 270',country: 'valle, Lima, Perú', logo: logo},
]
export const Home = () => {

    const [data, setData] = useState([...array])
    const [estates, setEstates] = useState([])
    const [valueInput, setValueInput] = useState({})
    const [searched, setSearched] = useState(false)
    
    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value.toUpperCase()
        setValueInput({...valueInput, [name]: value})
    }
    return (
        <Container>
            <Navbar setSearched={setSearched}/>
            <ContainerSearcher>
                <Title>Encontrá el hogar de tus sueños</Title>
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
                                country={element.country}
                                featured={true}/>
                        ))
                        }
                    </Carrousel>
            </Containerfeatured>
            ): (
            <ContainerListOfSearch>
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
            </ContainerListOfSearch>
            )}
            
        </Container>
    )
} 