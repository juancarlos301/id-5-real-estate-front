import { Navbar } from "../../components/navbar/navbar"
import { Searcher } from "../../components/searcher/searcher"
import { Carrousel } from "../../containers/carrousel/carrousel"
import { Cart } from "../../components/carts/cart"

//css
import { Container, ContainerSearcher, Title, ContainerFavs } from "./stylesHome"
import logo from '../../assets/logo512.png'
const data = [
    {price: 480000, time: '09 de septiembre 2022', address: 'CALLE OREJUELAS - N° 270', country: 'Miraflores, Lima, Perú',logo: logo},
    {price: 580000, time: '07 de septiembre 2022', address: 'CALLE FANTASIA - N° 270',country: 'Miraflores, Lima, Perú', logo: logo},
    {price: 680000, time: '01 de septiembre 2022', address: 'CALLE CRUZ - N° 270',country: 'Miraflores, Lima, Perú',logo: logo},
    {price: 780000, time: '10 de septiembre 2022', address: 'CALLE ESTACIONARIA - N° 270',country: 'Miraflores, Lima, Perú', logo: logo},
    {price: 880000, time: '20 de septiembre 2022', address: 'CALLE ORIENTAL - N° 270',country: 'Miraflores, Lima, Perú', logo: logo},


]
export const Home = () => {
    return (
        <Container>
            <Navbar/>
            <ContainerSearcher>
                <Title>Encontrá el hogar de tus sueños</Title>
                <Searcher/>
            </ContainerSearcher>
            <ContainerFavs>
                <Title alingLeft>Inmuebles destacados</Title>
                <Carrousel>
                    {data.map(element=>(
                        <Cart img={element.logo}
                                price={element.price}
                                time={element.time}
                                address={element.address}
                                country={element.country}/>
                    ))
                    }
                        {/*<Cart img={data[0].logo}
                         price={data[0].price}
                         time={data[0].time}
                         address={data[0].address}
                         country={data[0].country}/>
                         <Cart img={data[0].logo}
                         price={data[0].price}
                         time={data[0].time}
                         address={data[0].address}
    country={data[0].country}/>*/}
                </Carrousel>
            </ContainerFavs>
        </Container>
    )
} 