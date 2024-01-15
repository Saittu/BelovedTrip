import { Container } from "./style"

export function TextArea({ title, value, ...rest }){
    return (
        <Container {...rest}>
            {value}
        </Container>
    )
}