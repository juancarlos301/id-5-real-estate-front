
import { Container, Logo, Bar1y2, Bar3, ContainerBars, Linke, ButtonDrop, Ul, Li, DivDropDown, ContainerRutes} from "./stylesNavbar"
import logo from '../../assets/bonpland.jpg'
import { useState } from "react"
import { BsArrowDownShort } from "react-icons/bs";
export const Navbar = ({setSearched, setValueInput, valueInput}) => {
    const [dropDown, setDropDown] = useState(false)
    const [click, setClick] = useState(false)

    const ChangeDrop = () => {
        setDropDown(PrevState => !PrevState)
    }

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <Container >
            <Logo src={logo} alt="" onClick={()=>{
                setSearched(false)
                setValueInput({pais: valueInput.pais})
                }}/>
                <ContainerRutes open={click}>
                    <Linke to="/">Home</Linke>
                    <DivDropDown>
                        <ButtonDrop onClick={() => ChangeDrop()}>administracion<BsArrowDownShort size="28px" /></ButtonDrop>
                            <Ul visible={dropDown}>
                                <Li>inmuebles</Li>
                            </Ul>
                    </DivDropDown>
                </ContainerRutes>
                <ContainerBars onClick={handleClick} open={click}>
                    <Bar1y2/>
                    <Bar1y2/>
                    <Bar3/>
                </ContainerBars>
        </Container>
    )
} 