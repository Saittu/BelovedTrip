import { Container } from "./style";


export function Input( { title, icon: Icon, ...rest} ){
    return (
        <Container>
            <p>{title}</p>
            <div>
                <input {...rest}/>
                {Icon && <Icon size={20}/>}
            </div>

        </Container>

    )
}