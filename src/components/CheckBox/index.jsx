import { Container } from "./style";
import { GoCheckbox } from "react-icons/go";

export function CheckBox({ text, ...rest}) {
    return (
        <Container>
            <input type="checkbox" {...rest} className="Checkbox" id="check"/>
            <label htmlFor="check">{text}</label>
        </Container>

    ) 
}