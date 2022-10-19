import { Container, Img, ContainerData, ContainerOne,
        AlertZona, Text1,Text2, ContainerTwo, DimensionsText,
        DimensionsContainer, Ruler} from "./stylesCart"

import { BiBarChartAlt2, BiBed} from "react-icons/bi";
import { BsDoorOpen } from "react-icons/bs";
export const Cart = ({img, price, time, address, country}) => {
    return (
        <Container>
            <Img src={img} alt=""/>
            <ContainerData>
                <ContainerOne>
                <ContainerTwo>
                    <Text1 Size={'10px'}>{`USD ${price}`}</Text1>
                    <Text2>{time}</Text2>
                </ContainerTwo>
                    <AlertZona>Zona destacada</AlertZona>
                </ContainerOne>
                <ContainerTwo>
                    <Text1 Size={'8px'}>{address}</Text1>
                    <Text2 disabledColor>{country}</Text2>
                </ContainerTwo>
                <ContainerTwo row>
                    <DimensionsContainer>
                        <BiBarChartAlt2 fill="rgba(0, 0, 0, 0.5)"/> <DimensionsText>100 m2.</DimensionsText>
                    </DimensionsContainer>
                    <DimensionsContainer>
                        <Ruler /> <DimensionsText>500 m2.</DimensionsText>
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

