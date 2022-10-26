import Image1 from "../../assets/foto17.jpg";
import Image2 from "../../assets/foto19.jpg";

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
        <Image src={Image2} alt="" />
      </Section>
    </Container>
  );
}

