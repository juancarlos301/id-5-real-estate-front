import { TfiRulerAlt2, TfiRuler } from "react-icons/tfi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { Carrousel } from "../../containers/carrousel/carrousel";
import image2 from '../../assets/foto17.jpg'
import image3 from '../../assets/foto19.jpg'

import {
  Container,
  ContainerRow,
  BoldPrice,
  ContactText,
  OfferPrice,
  Adress,
  Description,
  DescriptionContainer,
  IconsTextContainer,
  IconsText,
  ButtonBuy,
} from "./StylesDetailCard";

export const DetailCard = ({card}) =>{
  const {
    logo,
    price,
    meters,
    address,
    country,
    rooms,
    baths,
  } = card

  const data = [logo,image2,image3]
  return (
      <Container>
        <Carrousel detail="true" data={data}/>
        <ContainerRow>
          <BoldPrice>{`USD ${price}`} </BoldPrice>
          <ContactText>
              Enviar mensaje
              <RiWhatsappFill style={{fontSize: "16px"}} />
          </ContactText>
        </ContainerRow>
        <OfferPrice>Casa | Alquilado</OfferPrice>
        <Adress title="true">{address}</Adress>
        <Adress>
          {country}
        </Adress>
        <DescriptionContainer>
          <IconsTextContainer>
            <TfiRulerAlt2 />
            <IconsText>{meters}m2</IconsText>
          </IconsTextContainer>
          <IconsTextContainer>
            <TfiRuler />
            <IconsText>{meters/2}m2</IconsText>
          </IconsTextContainer>
          <IconsTextContainer>
            <BsDoorOpen />
            <IconsText>2 Ambientes</IconsText>
          </IconsTextContainer>
          <IconsTextContainer>
            <MdOutlineSpaceDashboard />
            <IconsText>{rooms} dorm.</IconsText>
          </IconsTextContainer>
          <IconsTextContainer>
            <MdOutlineSpaceDashboard />
            <IconsText>{baths} baños.</IconsText>
          </IconsTextContainer>
        </DescriptionContainer>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto
          praesentium hic ullam amet quas ad quia iste, rerum et nemo mollitia.
          Rerum, quis. Eos vel illo aut. Blanditiis, a!
        </Description>
        <ButtonBuy>Adquirir inmueble</ButtonBuy>
      </Container>
  );
}