import { Container, Img, ContainerData, ContainerOne,
        AlertZona, Text1,Text2, ContainerTwo, DimensionsText,
        DimensionsContainer, Ruler, Contact} from "./stylesCart"

import { BiBarChartAlt2, BiBed} from "react-icons/bi";
import { BsDoorOpen } from "react-icons/bs";
export const Cart = ({img, price, time, address, country, featured, baths}) => {
    return (
        <Container visible={featured}>
            <Img src={img} alt=""visible={featured}/>
            <ContainerData visible={featured}>
                <ContainerOne>
                    <ContainerTwo visible={true}>
                        <Text1 Size={'10px'}>{`USD ${price}`}</Text1>
                        <Text2 disabledColor={featured} Size={'7px'}>{time}</Text2>
                    </ContainerTwo>
                    <AlertZona>Zona destacada</AlertZona>
                </ContainerOne>
                {featured ? (
                <ContainerTwo visible={featured}>
                    <Text1 Size={'8px'}>{address}</Text1>
                    <Text2>{country}</Text2>
                </ContainerTwo>
                    ) : (
                        <ContainerOne>
                            <ContainerTwo visible={true}>
                            <Text2 disabledColor={true} Size={'7px'}>{country}</Text2>
                            </ContainerTwo>
                            <Contact>contactar</Contact>
                        </ContainerOne>
                    )}
                <ContainerTwo row visible={featured}>
                    <DimensionsContainer>
                        <BiBarChartAlt2 fill="rgba(0, 0, 0, 0.5)"/> <DimensionsText>100 m2.</DimensionsText>
                    </DimensionsContainer>
                    <DimensionsContainer>
                        <Ruler /> <DimensionsText>{baths} baños.</DimensionsText>
                    </DimensionsContainer>
                    <DimensionsContainer>
                        <BsDoorOpen fill="rgba(0, 0, 0, 0.5)"/> <DimensionsText>10 amb.</DimensionsText>
                    </DimensionsContainer>
                    <DimensionsContainer>
                        <BiBed fill="rgba(0, 0, 0, 0.5)"/> <DimensionsText>8 dorm.</DimensionsText>
                    </DimensionsContainer>
                </ContainerTwo>
            </ContainerData>
        </Container>
    )
} 

