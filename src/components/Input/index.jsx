import { Container } from "./style";


export function Input( { title, icon: Icon, ...rest} ){
    return (
        <Container>
            <label>{title}</label>
            <div>
                <input {...rest}/>
                {Icon && <Icon size={20}/>}
            </div>

        </Container>

    )
}