import { useRef, useState} from "react"
import { Container, Img, Button, DivImg } from "./stylesCarrousel"
import { Cart } from "../../components/carts/cart"
export const Carrousel = ({data, detail = false}) => {
    
    const slideShow = useRef(null)
    const [selectedImage, setSelectedImage] = useState(0)

    const amountImages = data.length

    const nextImage = () => {
        const select = selectedImage === amountImages - 1 ? 0 : selectedImage + 1
        setSelectedImage(select)
    }

    const afterImage = () => {
        const select = selectedImage === 0 ? amountImages - 1 : selectedImage - 1
        setSelectedImage(select)
    }
    return (
        <Container detail={detail} ref={slideShow}>
            {detail && amountImages > 1 && (
                <Button right="true" onClick={()=>nextImage()}>{">"}</Button>
            )}
            {detail && amountImages > 1 && (
                <Button onClick={()=>afterImage()}>{"<"}</Button>
            )}
            {detail ? data.map((item, index)=>{
                return<DivImg key={index}
                                divActive={index === selectedImage ?  'active': 'inactive'}> 
                    {selectedImage === index &&   
                        <Img src={item} alt="inmobiliaria3" />
                    }
                    </DivImg>
            })
                :  data.map((element, index)=>(
                    <Cart key={index}
                        id={element.id}
                        img={element.logo}
                        price={element.price}
                        time={element.time}
                        address={element.address}
                        country={element.country}
                        baths={element.baths}
                        environments={element.environments}
                        rooms={element.rooms}
                        meters={element.meters}
                        featured={true}/>
                    ))
                }
           
        </Container>
    )
} 