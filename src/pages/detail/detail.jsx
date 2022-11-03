import { useEffect, useState } from "react"
import { Navbar } from "../../components/navbar/navbar"
import { Footer } from "../../containers/footer/footer"
import { MainContainer, ButtonZone } from "./stylesDetail"
import { useParams } from "react-router-dom"
import { DetailCard } from "../../components/detailCard/detailCard"
import logo from '../../assets/foto2.jpeg'
import logo2 from '../../assets/foto17.jpg'
import logo3 from '../../assets/foto19.jpg'

const array = [
    {id: 1,price: 480000, time: '09 de septiembre 2022', address: 'CALLE OREJUELAS - N° 270', country: 'Miraflores, Medellin, colombia',logo: logo, environments: 2, baths: 2, rooms: 4, meters: 1000},
    {id: 2,price: 580000, time: '07 de septiembre 2022', address: 'CALLE FANTASIA - N° 270',country: 'Miraflores, Lima, Bolivar', logo: logo2, environments: 2, baths: 1, rooms: 4, meters: 1000},
    {id: 3,price: 680000, time: '01 de septiembre 2022', address: 'CALLE CRUZ - N° 270',country: 'Altamira, Lima, Argentina',logo: logo3, environments: 2, baths: 1, rooms: 5, meters: 2000},
    {id: 4,price: 780000, time: '10 de septiembre 2022', address: 'CALLE ESTACIONARIA - N° 270',country: 'Miraflores, Lima, Lima', logo: logo, environments: 2, baths: 2, rooms: 3, meters: 3000},
    {id: 5,price: 880000, time: '20 de septiembre 2022', address: 'CALLE ORIENTAL - N° 270',country: 'valle, Lima, Perú', logo: logo2, environments: 2, baths: 2, rooms: 2, meters: 4000},
]

export const Detail = () => {

    const [card, setCard] = useState({})
    const params = useParams()
    const {id} = params
    const idCard = Number(id)

    useEffect(()=>{
        const selectCard = array.find((item)=>item.id === idCard )
        setCard(selectCard)
    }, [idCard])


return (
    <>
        <Navbar/>
        <MainContainer>
            <ButtonZone>Zona destacada</ButtonZone>
            <DetailCard card={card}/>
        </MainContainer>
        <Footer/>
    </>
)
}