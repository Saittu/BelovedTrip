import { Container } from "./style";

export function ButtonText({ text, ...rest }){
    return (
        <Container {...rest}>
            {text}
        </Container>
    )
}