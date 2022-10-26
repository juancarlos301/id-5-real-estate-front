import { TfiRulerAlt2, TfiRuler } from "react-icons/tfi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { RiFontSize2, RiWhatsappFill } from "react-icons/ri";
import img1 from "../../img/foto17.jpg";
import {
  MainContainer,
  Img,
  ButtonZone,
  ContainerRow,
  BoldPrice,
  ContactText,
  OfferPrice,
  AdressTitle,
  Adress,
  Description,
  DescriptionContainer,
  IconsTextContainer,
  IconsText,
  ButtonBuy,
} from "./StylesDetails";

export function Details({
  img,
  price,
  time,
  adress,
  country,
  featured,
  baths,
}) {
  const style = { fontSize: "16px" };
  return (
    <MainContainer>
      <ButtonZone>Zona destacada</ButtonZone>
      <div>
        <Img src={img1} alt="inmobiliaria" />
        <ContainerRow>
          <BoldPrice>{`USD $${892939}`} </BoldPrice>
          <ContactText>
            Enviar mensaje
            <RiWhatsappFill style={style} />
          </ContactText>
        </ContainerRow>
        <OfferPrice>{price} $9239.45 | Oferta</OfferPrice>
        <AdressTitle>{adress}Avenida oscar R Benavides</AdressTitle>
        <Adress>
          {adress}
          {country} 293 Esthimer rd. Avn luicia. Illinois 84548
        </Adress>
        <DescriptionContainer>
          <IconsTextContainer>
            <TfiRulerAlt2 />
            <IconsText>123m2</IconsText>
          </IconsTextContainer>
          <IconsTextContainer>
            <TfiRuler />
            <IconsText>12m2</IconsText>
          </IconsTextContainer>
          <IconsTextContainer>
            <BsDoorOpen />
            <IconsText>2 Ambientes</IconsText>
          </IconsTextContainer>
          <IconsTextContainer>
            <MdOutlineSpaceDashboard />
            <IconsText>2 dorm.</IconsText>
          </IconsTextContainer>
        </DescriptionContainer>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto
          praesentium hic ullam amet quas ad quia iste, rerum et nemo mollitia.
          Rerum, quis. Eos vel illo aut. Blanditiis, a!
        </Description>
        <ButtonBuy>Adquirir inmueble</ButtonBuy>
      </div>
    </MainContainer>
  );
}
