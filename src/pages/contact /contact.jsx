import { Container } from "./stylesContact";
import { InputComponent } from "../../components/select/inputComponent";
export const Contact = ({}) => {

    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value.toUpperCase()
        setValueInput({...valueInput, [name]: value})
    }

    return (
        <Container>
            <form>
                <InputComponent placeholder="Email" nameInput={'email'}/>
                <InputComponent placeholder="Name" nameInput={'email'}/>
                <InputComponent placeholder="Email" nameInput={'email'}/>
                <InputComponent placeholder="Email" nameInput={'email'}/>
            </form>
        </Container>
    )
}