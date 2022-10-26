import { Select, Container, Title} from "./stylesSelect.js"

export const SelectComponent = ({handleSearch, placeholder,
                                nameInput,defaultValue, countries}) =>{


    const verifyInputs = (e) => {
        handleSearch(e)
    }

    return(
        <Container>
            <Title>{placeholder}</Title>
                <div>
                    <Select name={nameInput} defaultValue={defaultValue}
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
