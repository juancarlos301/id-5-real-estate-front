import Image1 from "../../assets/foto2.jpeg";
import {
  Container,
  Section,
  Image,
  InfoContainer,
  Paragraph,
  Button,
} from "./stylesShoppingGuide";

export const ShoppingGuide = () => {
  return (
    <Container>
      <Section>
        <Image src={Image1} alt="rooms" />
        <InfoContainer>
          <Paragraph>¿Que necesito para comprar?</Paragraph>
          <Button>Guia de compra</Button>
        </InfoContainer>
      </Section>

      <Section>
        <InfoContainer>
          <Paragraph>¿Que necesito para comprar?</Paragraph>
          <Button>Guia de compra</Button>
        </InfoContainer>
        <Image src={Image1} alt="" />
      </Section>
    </Container>
  );
}

