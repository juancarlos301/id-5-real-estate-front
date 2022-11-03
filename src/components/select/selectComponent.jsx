import { Select, Container, Title} from "./stylesSelect.js"

export const SelectComponent = ({handleSearch, placeholder,
                                nameInput,defaultValue, countries}) =>{

    const verifyInputs = (e) => {
        handleSearch(e)
    }
    const viewDefaultValue = () => {
        const result = countries.find((item)=>item.country.normalize("NFD").replace(/[\u0300-\u036f]/g, '').includes(defaultValue.normalize("NFD").replace(/[\u0300-\u036f]/g, '')))
        return result?.country
    }

    return(
        <Container>
            <Title>{placeholder}</Title>
                <div>
                    <Select name={nameInput} defaultValue={viewDefaultValue()}
                     onChange={(e)=>verifyInputs(e)}
                     >
                         {countries.map((item,index)=>(
                             <option key={index} value={item.country} >{item.country}</option>
                         ))
                         }
                     </Select>
                </div>         
        </Container>
    )}